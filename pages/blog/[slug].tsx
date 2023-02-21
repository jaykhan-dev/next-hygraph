import client from "../../lib/apollo";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GET_SINGLE_BLOG from "../../lib/blogSingle";
import { RichText } from "@graphcms/rich-text-react-renderer";

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

const Post: NextPage = ({ post, children }: any) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta title="description" content={post.excerpt} />
      </Head>

      <div className="bg-white text-blue-900 lg:p-0 p-4">
        <div className="py-20 lg:w-1/2 mx-auto pt-24">
          <div className="border border-blue-900/40 shadow-xl rounded-lg p-4">
            <h1 className="lg:text-6xl font-bold text-3xl">{post.title}</h1>
            <p className="text-xl">{post.excerpt}</p>
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
                <pre className="bg-gray-100 rounded shadow-xl p-4 overflow-x-scroll">
                  <code className="language-javascript">{children}</code>
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
