import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import client from "../lib/apollo";
import { gql } from "@apollo/client";
import Link from "next/link";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          title
          id
          slug
          date
          excerpt
          tags
          coverImage {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data.posts,
    },
  };
}

const Home: NextPage = ({ posts }: any) => {
  if (!posts) return <div>No Data!</div>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Next Hygraph</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <h1 className="text-4xl my-8 font-black">Jay Khan</h1>
      </div>
      {/* POSTS */}
      <div className="grid space-y-4">
        {posts.map((post: any) => (
          <Link
            key={post.id}
            href={`/projects/${post.slug}`}
            className="border p-4 hover:bg-gray-900 duration-200"
          >
            <h1>{post.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
