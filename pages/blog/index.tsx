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

      <div className="py-20 w-full text-center flex justify-center items-center border-b border-white/10">
        {/* <Image
            src={Wanderer}
            width={200}
            height={200}
            alt="wanderer graphic"
          /> */}
        <h1 className="my-4 lg:text-8xl text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800">
          Blog
        </h1>
      </div>
      <div className="lg:w-2/3 mx-auto py-20 grid lg:grid-cols-2">
        {blogs.map((blog: any) => (
          <Link href={`/blog/${blog.slug}`} key={blog.id} className="">
            <div className="border border-white/20 rounded hover:border-white duration-300 hover:scale-95 p-4">
              <Image
                src={blog.coverImage.url}
                width={700}
                height={200}
                alt="Blog Image"
              />
              <div className="lg:flex justify-between my-4">
                <h2 className="lg:text-4xl font-bold text-2xl">{blog.title}</h2>

                <p>{blog.date}</p>
              </div>
              <p className="my-4">{blog.excerpt}</p>
              <div className="flex flex-wrap">
                {blog.tags.map((tag: string) => (
                  <p
                    key={tag}
                    className="border p-1 m-1 rounded border-white/20"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Blogs;
