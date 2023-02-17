import client from "../../lib/apollo";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GET_SINGLE_BLOG from "../../lib/blogSingle";

export async function getStaticPaths() {
  const paths: any = [];
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: any) {
  const response = await client.query({
    query: GET_SINGLE_BLOG,
    variables: {
      slug: params.slug,
    },
  });

  const post = response.data?.post;
  return {
    props: {
      post,
    },
  };
}

const Post: NextPage = ({ post }: any) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <div className="py-20 lg:w-2/3 mx-auto">
        <h1 className="lg:text-6xl font-bold text-3xl">{post.title}</h1>
        <p>{post.excerpt}</p>
      </div>
    </>
  );
};
export default Post;
