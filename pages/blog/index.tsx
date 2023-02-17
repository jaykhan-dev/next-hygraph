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

      <div className="lg:w-2/3 mx-auto h-screen py-20">
        {blogs.map((blog: any) => (
          <Link href={`/blog/${blog.slug}`} key={blog.id}>
            <h2>{blog.title}</h2>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Blogs;
