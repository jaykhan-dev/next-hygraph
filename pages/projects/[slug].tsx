import { gql } from "@apollo/client";
import client from "../../lib/apollo";
import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
// import { RichText } from "@graphcms/rich-text-react-renderer";

export async function getStaticProps({ params }: any) {
  const GET_PROJECTS = gql`
    query SingleProject($slug: String!) {
      project(where: { slug: $slug }) {
        title
        excerpt
        id
        slug
        content {
          html
        }
        projectImage {
          url
        }
        category
      }
    }
  `;

  const response = await client.query({
    query: GET_PROJECTS,
    variables: {
      slug: params.slug,
    },
  });

  const project = response.data?.project;
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

const Project: NextPage = ({ project }: any) => {
  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>
      <div className="grid place-items-center relative bg-gradient-to-b from-zinc-900/90 to-zinc-900">
        <div className="overflow-hidden lg:w-1/2 mx-auto my-12 py-12">
          <Image
            src={project.projectImage.url}
            alt="hygraph image"
            width={1920}
            height={200}
            className="border border-white/20 rounded shadow-xl"
          />
        </div>
        <div className="z-40 lg:w-1/2 mx-auto p-4">
          <h1 className="text-6xl font-black my-4">{project.title}</h1>
          <p className="text-xl my-8">{project.excerpt}</p>
          {/* <RichText
            content={project.content.html}
            renderers={{
              h1: ({ children }) => <h1 className="text-white">{children}</h1>,
              bold: ({ children }) => <strong>{children}</strong>,
            }}
          /> */}
          <button className="badge badge-accent">{project.category}</button>
          <article
            className="my-4"
            dangerouslySetInnerHTML={{ __html: project?.content?.html }}
          ></article>
          {/* <div>
            {project.tags.map((tag: any) => (
              <li>{tag.tag}</li>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Project;
