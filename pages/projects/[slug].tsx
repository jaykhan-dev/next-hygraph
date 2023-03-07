import { gql } from "@apollo/client";
import client from "../../lib/apollo";
import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
import { motion } from "framer-motion";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { GET_SINGLE_PROJECT } from "../../lib/projectQueries";

export async function getStaticProps({ params }: any) {
  const response = await client.query({
    query: GET_SINGLE_PROJECT,
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
        <meta name="description" content={project.excerpt} />
        {project.tags.map((tag: any) => (
          <meta name="keywords" key={tag} content={tag} />
        ))}
      </Head>
      <div className="grid place-items-center p-4 bg-white text-blue-900">
        <div className="lg:w-1/2 mx-auto mt-20">
          <h1 className="text-6xl font-black my-4">{project.title}</h1>
          <p className="text-3xl my-8 text-sky-500">{project.excerpt}</p>
          <button className="badge badge-accent">{project.category}</button>
          <div className="lg:flex my-4">
            {project.tags.map((tag: any) => (
              <p key={tag} className="p-2 border border-blue-900 rounded m-2">
                {tag}
              </p>
            ))}
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="overflow-hidden lg:w-1/2 mx-auto"
        >
          <Image
            src={project.projectImage?.url}
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
              li: ({ children }) => <li className="my-2">&#187; {children}</li>,
            }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default Project;
