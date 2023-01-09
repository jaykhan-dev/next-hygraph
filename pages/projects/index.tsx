import client from "../../lib/apollo";
import { gql } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import Horse from "../../public/images/horse.svg";
import styles from "../../components/bgImages.module.css";

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Projects {
        projects {
          title
          id
          slug
          excerpt
          category
          projectImage {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      projects: data.projects,
    },
  };
}

const Projects: NextPage = ({ projects }: any) => {
  if (!projects) return <div>no projects!</div>;

  return (
    <>
      <Head>
        <title>Jay Khan Projects</title>
        <meta title="description" content="Jay Khan work projects" />
      </Head>

      <div className={styles.projectBg}>
        <div className="bg-gradient-to-b from-zinc-900/90 to-zinc-900 backdrop-blur-md p-4">
          <div className="py-20 w-full text-center flex justify-center items-center space-x-1">
            <div className="">
              {/* <Image
                src={Horse}
                width={100}
                height={200}
                alt="campfire graphic"
              /> */}
            </div>
            <h1 className="lg:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800">
              Projects
            </h1>
          </div>

          <div className="lg:w-2/3 mx-auto py-20 grid lg:grid-cols-3 gap-4">
            {projects.map((project: any) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="border border-white/10 rounded hover:border-white/30 my-4 hover:shadow-xl p-1 hover:scale-95 duration-200"
              >
                <Image
                  src={project.projectImage?.url}
                  height={800}
                  width={1000}
                  alt="project image"
                />
                <div className="py-4 p-4">
                  <h1 className="text-3xl font-bold my-2">{project.title}</h1>
                  <p className="my-4">{project.excerpt}</p>
                  <p className="badge badge-accent">{project.category}</p>
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
