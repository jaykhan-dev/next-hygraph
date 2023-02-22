import client from "../../lib/apollo";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { SINGLE_BLOG } from "../../lib/blogQueries";
import { RichText } from "@graphcms/rich-text-react-renderer";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";
import Prism from "prismjs";

export async function getStaticPaths() {
  const paths: any = [];
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: any) {
  const response = await client.query({
    query: SINGLE_BLOG,
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

const Post: NextPage = ({ post, children }: any) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta title="description" content={post.excerpt} />
      </Head>

      <div className="bg-white text-blue-900 lg:p-0 p-4">
        <div className="py-20 lg:w-1/2 mx-auto pt-24">
          <div className="border-b py-8">
            <h1 className="lg:text-6xl font-bold text-3xl">{post.title}</h1>
            <p className="font-mono my-2">{post.date}</p>
            <p className="text-2xl my-4 text-green-600">{post.excerpt}</p>
            <div className="flex items-center flex-wrap">
              {post.tags.map((tag: string) => (
                <p className="p-1 m-1 border rounded">{tag}</p>
              ))}
            </div>
          </div>
          <div className="grid place-items-center my-4 rounded-lg">
            <Image
              src={post.coverImage.url}
              width={1200}
              height={500}
              alt="Post Image"
              className="rounded-lg"
            />
          </div>
          <RichText
            content={post.content?.raw}
            renderers={{
              h2: ({ children }: any) => (
                <h2 className="text-4xl font-bold mt-4 py-4">{children}</h2>
              ),
              h3: ({ children }) => <h3 className="text-2xl">{children}</h3>,
              p: ({ children }) => (
                <p className="my-4 leading-loose">{children}</p>
              ),
              blockquote: ({ children }) => (
                <blockquote className="p-4 border-l-4 text-2xl italic">
                  {children}
                </blockquote>
              ),
              li: ({ children }) => <li className="my-2">&#187; {children}</li>,
              code_block: ({ children }) => (
                <pre className="rounded shadow-xl p-4 overflow-x-scroll">
                  <code className="">{children}</code>
                </pre>
              ),
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Post;
