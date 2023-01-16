import client from "../../lib/apollo";
import { gql } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
// import Horse from "../../public/images/horse.svg";
import styles from "../../components/bgImages.module.css";
import GET_PROJECTS from "../../lib/projectAll";

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_PROJECTS,
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
        <div className="bg-gradient-to-b from-black/90 to-zinc-900 backdrop-blur-md p-4 text-white">
          <div className="py-20 w-full text-center flex justify-center items-center space-x-1">
            <div className="">
              {/* <Image
                src={Horse}
                width={100}
                height={200}
                alt="campfire graphic"
              /> */}
            </div>
            <h1 className="lg:text-8xl text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800">
              Projects
            </h1>
          </div>

          {/* FILTER */}

          {/* <div className="lg:w-1/4 mx-auto grid place-items-center grid-cols-2 gap-4 my-4">
            <button className="btn btn-primary">
              <img src="" alt="" />
              <p className="">Front-end Development</p>
            </button>
            <button className="btn btn-secondary w-full">
              <img src="" alt="" />
              <p className="">Graphic Design</p>
            </button>
          </div> */}

          {/* SEARCH */}

          {/* <div className="my-2 lg:w-1/4 mx-auto">
            <form action="" className="w-full flex justify-center">
              <input
                type="text"
                name=""
                id=""
                placeholder="search project"
                className="p-4 border border-white/10 rounded-xl w-full text-center bg-black/0"
              />
            </form>
          </div> */}

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
                  <p className="badge badge-primary">{project.category}</p>
                  <div className="flex space-x-2 mt-4">
                    {project.tags.map((tag: string) => (
                      <p
                        key={tag}
                        className="border p-1 rounded border-white/10"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
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
