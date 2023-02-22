import client from "../../lib/apollo";
import {
  ALL_BLOGS,
  JAVASCRIPT_BLOG,
  BITCOIN_BLOG,
} from "../../lib/blogQueries";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import styles from "../../components/bgImages.module.css";
import * as Tabs from "@radix-ui/react-tabs";
import tabStyles from "../../components/radixTabs.module.css";

export async function getStaticProps() {
  const { data: allData } = await client.query({
    query: ALL_BLOGS,
  });

  const { data: javascriptData } = await client.query({
    query: JAVASCRIPT_BLOG,
  });

  const { data: bitcoinData } = await client.query({
    query: BITCOIN_BLOG,
  });

  return {
    props: {
      blogs: allData.posts,
      javascript: javascriptData.posts,
      bitcoin: bitcoinData.posts,
    },
  };
}

const Blogs: NextPage = ({ blogs, javascript, bitcoin }: any) => {
  if (!blogs) return <div>no blogs</div>;

  return (
    <>
      <Head>
        <title>Jay Khan's Blog</title>
        <meta title="description" content="Blog on Front-end Developement" />
      </Head>

      <div className="text-blue-900">
        <div className={styles.blogBg}>
          <div className="lg:w-2/3 py-20 mt-20 mx-auto lg:flex items-center space-x-2 text-white">
            <div className="grid lg:place-items-start place-items-center">
              <i className="fa-solid fa-feather-pointed text-6xl border p-4 rounded-lg"></i>
            </div>
            <div className="lg:text-start text-center">
              <h1 className="text-4xl font-black">Blog</h1>
              <div className="w-full">
                <p>Mainly on the front-end framework scene and Bitcoin</p>
              </div>
            </div>
          </div>
        </div>

        {/* DATA */}

        <div className="mx-auto bg-white lg:p-0 p-4">
          <Tabs.Root className={tabStyles.TabsRoot} defaultValue="tab1">
            <div className="border-b py-4">
              <div className="flex justify-start whitespace-nowrap w-2/3 mx-auto">
                <Tabs.List
                  className={tabStyles.TabsList}
                  aria-label="Manage your account"
                >
                  <Tabs.Trigger className={tabStyles.TabsTrigger} value="tab1">
                    <div className="flex items-center space-x-2">
                      <i className="fa-solid fa-list lg:text-xl text-4xl"></i>
                      <p className="lg:flex hidden text-xl">All</p>
                    </div>
                  </Tabs.Trigger>
                  <Tabs.Trigger className={tabStyles.TabsTrigger} value="tab2">
                    <div className="flex items-center space-x-2">
                      <i className="fa-brands fa-js lg:text-xl text-4xl"></i>
                      <p className="lg:flex hidden text-xl">Javascript</p>
                    </div>
                  </Tabs.Trigger>
                  <Tabs.Trigger className={tabStyles.TabsTrigger} value="tab3">
                    <div className="flex items-center space-x-2">
                      <i className="fa-brands fa-bitcoin lg:text-xl text-4xl"></i>
                      <p className="lg:flex hidden text-xl">Bitcoin</p>
                    </div>
                  </Tabs.Trigger>
                </Tabs.List>
              </div>
            </div>
            <Tabs.Content className="TabsContent" value="tab1">
              <div className="mx-auto lg:p-0 p-4">
                <div className="py-20 grid lg:grid-cols-4 gap-4 lg:w-2/3 mx-auto">
                  {blogs.map((blog: any) => (
                    <Link
                      href={`/blog/${blog.slug}`}
                      key={blog.id}
                      className=""
                    >
                      <div className="border border-blue-900/40 rounded p-2 duration-300 hover:scale-95 flex space-x-2">
                        {/* <Image
                          src={blog.coverImage.url}
                          width={200}
                          height={200}
                          alt="Blog Image"
                        /> */}
                        <div>
                          <div className="mb-2">
                            <h2 className="lg:text-2xl font-bold text-xl">
                              {blog.title}
                            </h2>

                            <p className="font-mono">{blog.date}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="tab2">
              <div className="mx-auto lg:p-0 p-4">
                <div className="py-20 grid lg:grid-cols-4 gap-4 lg:w-2/3 mx-auto">
                  {javascript.map((blog: any) => (
                    <Link
                      href={`/blog/${blog.slug}`}
                      key={blog.id}
                      className=""
                    >
                      <div className="border border-blue-900/40 rounded p-2 duration-300 hover:scale-95 flex space-x-2">
                        {/* <Image
                          src={blog.coverImage.url}
                          width={200}
                          height={200}
                          alt="Blog Image"
                        /> */}
                        <div>
                          <div className="mb-2">
                            <h2 className="lg:text-2xl font-bold text-xl">
                              {blog.title}
                            </h2>

                            <p className="font-mono">{blog.date}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="tab3">
              <div className="mx-auto lg:p-0 p-4">
                <div className="py-20 grid lg:grid-cols-4 gap-4 lg:w-2/3 mx-auto">
                  {bitcoin.map((blog: any) => (
                    <Link
                      href={`/blog/${blog.slug}`}
                      key={blog.id}
                      className=""
                    >
                      <div className="border border-blue-900/40 rounded p-2 duration-300 hover:scale-95 flex space-x-2">
                        {/* <Image
                          src={blog.coverImage.url}
                          width={200}
                          height={200}
                          alt="Blog Image"
                        /> */}
                        <div>
                          <div className="mb-2">
                            <h2 className="lg:text-2xl font-bold text-xl">
                              {blog.title}
                            </h2>

                            <p className="font-mono">{blog.date}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </>
  );
};

export default Blogs;
