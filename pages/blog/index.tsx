import client from "../../lib/apollo";
import GET_BLOGS from "../../lib/blogAll";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";

export async function getStaticProps() {
  const { data: allData } = await client.query({
    query: GET_BLOGS,
  });

  return {
    props: {
      blogs: allData.posts,
    },
  };
}

const Blogs: NextPage = ({ blogs }: any) => {
  if (!blogs) return <div>no blogs</div>;

  return (
    <>
      <Head>
        <title>Jay Khan's Blog</title>
        <meta title="description" content="Blog on Front-end Developement" />
      </Head>

      <div className="bg-white text-blue-900 lg:p-0 p-4">
        <div className="lg:w-2/3 mx-auto py-20">
          <h1 className="my-4 lg:text-4xl text-2xl font-black">Blog</h1>
          <div className="w-full py-4 p-2 shadow-xl rounded-lg border">
            <h2 className="lg:text-4xl font-bold">Tech related topics</h2>
            <p>Mainly on the front-end framework scene and Bitcoin</p>
          </div>
          <div className="py-20 grid lg:grid-cols-2">
            {blogs.map((blog: any) => (
              <Link href={`/blog/${blog.slug}`} key={blog.id} className="">
                <div className="border border-blue-900/40 rounded p-2 duration-300 hover:scale-95 flex space-x-2">
                  <Image
                    src={blog.coverImage.url}
                    width={200}
                    height={200}
                    alt="Blog Image"
                  />
                  <div>
                    <div className="mb-2">
                      <h2 className="lg:text-4xl font-bold text-2xl">
                        {blog.title}
                      </h2>

                      <p className="font-mono">{blog.date}</p>
                    </div>
                    {/* <p className="my-2">{blog.excerpt}</p> */}
                  </div>
                  {/* <div className="flex flex-wrap">
                    {blog.tags.map((tag: string) => (
                      <p
                        key={tag}
                        className="border p-1 m-1 rounded border-blue-900"
                      >
                        {tag}
                      </p>
                    ))}
                  </div> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
