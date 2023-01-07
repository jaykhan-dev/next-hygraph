import { gql } from "@apollo/client";
import client from "../../lib/apollo";
import Head from "next/head";
import Image from "next/image";

export async function getStaticProps({ params }: any) {
  const GET_PROJECTS = gql`
    query SinglePost($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        tags
        date
        coverImage {
          url
        }
        author {
          name
          id
        }
        content {
          html
          markdown
          raw
          text
        }
        id
        slug
      }
    }
  `;

  const response = await client.query({
    query: GET_PROJECTS,
    variables: {
      slug: params.slug,
    },
  });

  const project = response.data?.post;
  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const paths: any = [];
  return {
    paths,
    fallback: "blocking",
  };
}

export default function Project({ project }: any) {
  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>
      <div className="grid place-items-center relative">
        <div className="h-96 overflow-hidden">
          <Image
            src={project.coverImage.url}
            alt="hygraph image"
            width={1920}
            height={200}
            className="bg-fixed"
          />
        </div>
        <div className="z-40 lg:w-1/2 mx-auto p-4">
          <h1 className="text-6xl font-black my-8">{project.title}</h1>
          <p>by: {project.author.name}</p>
          <p className="text-xl my-8">{project.excerpt}</p>
          <article
            className="leading-10"
            dangerouslySetInnerHTML={{ __html: project.content.html }}
          ></article>
          <div>{project.tags}</div>
        </div>
      </div>
    </>
  );
}
