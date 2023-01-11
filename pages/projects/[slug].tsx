import { gql } from "@apollo/client";
import client from "../../lib/apollo";
import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
import { motion } from "framer-motion";
import { RichText } from "@graphcms/rich-text-react-renderer";

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
          raw
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

const imageVariants = {
  hidden: {
    opacity: 0,
    x: 10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const Project: NextPage = ({ project, children }: any) => {
  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>
      <div className="grid place-items-center relative bg-gradient-to-b from-black to-zinc-900 p-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="overflow-hidden lg:w-1/2 mx-auto my-12 py-12"
        >
          <Image
            src={project.projectImage.url}
            alt="hygraph image"
            width={1920}
            height={200}
            className="border border-white/20 rounded shadow-xl"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="z-40 lg:w-1/2 mx-auto p-4"
        >
          <h1 className="text-6xl font-black my-4">{project.title}</h1>
          <p className="text-3xl my-8 text-sky-500">{project.excerpt}</p>
          {/* <RichText
            content={project.content.html}
            renderers={{
              h1: ({ children }) => <h1 className="text-white">{children}</h1>,
              bold: ({ children }) => <strong>{children}</strong>,
            }}
          /> */}
          <button className="badge badge-accent">{project.category}</button>
          {/* <article
            className="my-4"
            dangerouslySetInnerHTML={{ __html: project?.content?.html }}
          ></article> */}

          {/* RICH TEXT HYGRAPH */}
          <RichText
            content={project.content?.raw}
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
            }}
          />
          {/* <div>
            {project.tags.map((tag: any) => (
              <li>{tag.tag}</li>
            ))}
          </div> */}
        </motion.div>
      </div>
    </>
  );
};

export default Project;
