import client from "../../lib/apollo";
import { gql } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";

export async function getServerSideProps() {
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

const Projects: NextPage = ({ posts }: any) => {
  if (!posts) return <div>no projects!</div>;

  return (
    <>
      <Head>
        <title>Jay Khan Projects</title>
        <meta title="description" content="Jay Khan work projects" />
      </Head>

      <div className="">
        <div className="bg-black/90">
          <div className="lg:w-2/3 mx-auto my-20 py-20 grid lg:grid-cols-3 gap-4">
            {posts.map((post: any) => (
              <Link
                key={post.id}
                href={`/projects/${post.slug}`}
                className="border border-white/10 rounded hover:border-white/30 my-4 hover:shadow-xl p-1 hover:bg-gray-900 duration-200"
              >
                <Image
                  src={post.coverImage.url}
                  height={200}
                  width={200}
                  alt="project image"
                />
                <div className="py-4">
                  <h1 className="text-3xl font-bold my-2">{post.title}</h1>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
