import client from "../../lib/apollo";
import { gql } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
// import Horse from "../../public/images/horse.svg";
import styles from "../../components/bgImages.module.css";
import GET_PROJECTS from "../../lib/projectAll";
import GET_GRAPHICS_PROJECTS from "../../lib/projectGraphics";
import GET_WEB_PROJECTS from "../../lib/projectWeb";
import { Button } from "react-daisyui";
import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import tabStyles from "../../components/radixTabs.module.css";
import HorseGraphic from "../../public/images/horse-graphic.svg";

export async function getStaticProps() {
  const { data: allData } = await client.query({
    query: GET_PROJECTS,
  });

  const { data: frontendData } = await client.query({
    query: GET_WEB_PROJECTS,
  });

  const { data: graphicsData } = await client.query({
    query: GET_GRAPHICS_PROJECTS,
  });

  return {
    props: {
      projects: allData.projects,
      frontend: frontendData.projects,
      graphics: graphicsData.projects,
    },
  };
}

const Projects: NextPage = ({ projects, frontend, graphics }: any) => {
  if (!projects) return <div>no projects!</div>;

  return (
    <>
      <Head>
        <title>Jay Khan Projects</title>
        <meta
          title="description"
          content="Jay Khan projects involving Sveltekit, NextJS, VueJS, JavaScript, Typescript, Adobe Creative Cloud, Photoshop, Illustrator"
        />
      </Head>

      <div className="">
        <div className="bg-gradient-to-b from-black/90 to-zinc-900 backdrop-blur-md lg:p-0 p-4 text-white">
          <div className={styles.projectBg}>
            <div className="lg:w-2/3 mx-auto py-24 flex items-center justify-center relative">
              <Image
                src={HorseGraphic}
                width={200}
                height={200}
                alt="campfire graphic"
                className="opacity-10 absolute left-0"
              />
              <h1 className="lg:text-8xl text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800 py-12">
                Projects
              </h1>
            </div>
          </div>

          {/* FILTER */}
          <div className="lg:w-2/3 mx-auto">
            <Tabs.Root className={tabStyles.TabsRoot} defaultValue="tab1">
              <div className="lg:w-1/2 mx-auto">
                <Tabs.List
                  className={tabStyles.TabsList}
                  aria-label="Manage your account"
                >
                  <Tabs.Trigger className={tabStyles.TabsTrigger} value="tab1">
                    <div className="flex items-center space-x-2">
                      <i className="fa-solid fa-list lg:text-xl text-4xl"></i>
                      <p className="lg:flex hidden">All</p>
                    </div>
                  </Tabs.Trigger>
                  <Tabs.Trigger className={tabStyles.TabsTrigger} value="tab2">
                    <div className="flex items-center space-x-2">
                      <i className="fa-solid fa-desktop lg:text-xl text-4xl"></i>
                      <p className="lg:flex hidden">Front-end</p>
                    </div>
                  </Tabs.Trigger>
                  <Tabs.Trigger className={tabStyles.TabsTrigger} value="tab3">
                    <div className="flex items-center space-x-2">
                      <i className="fa-solid fa-draw-polygon lg:text-xl text-4xl"></i>
                      <p className="lg:flex hidden">Graphic Design</p>
                    </div>
                  </Tabs.Trigger>
                </Tabs.List>
              </div>
              <Tabs.Content className="TabsContent" value="tab1">
                <div className="mx-auto py-20 grid lg:grid-cols-3 gap-4">
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
                        <h1 className="text-3xl font-bold my-2">
                          {project.title}
                        </h1>
                        <p className="my-4">{project.excerpt}</p>
                        <p className="badge badge-primary">
                          {project.category}
                        </p>
                        <div className="flex flex-wrap mt-4">
                          {project.tags.map((tag: string) => (
                            <p
                              key={tag}
                              className="border p-1 m-1 rounded border-white/10"
                            >
                              {tag}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Tabs.Content>
              <Tabs.Content className="TabsContent" value="tab2">
                <div className="mx-auto py-20 grid lg:grid-cols-3 gap-4">
                  {frontend.map((project: any) => (
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
                        <h1 className="text-3xl font-bold my-2">
                          {project.title}
                        </h1>
                        <p className="my-4">{project.excerpt}</p>
                        <p className="badge badge-primary">
                          {project.category}
                        </p>
                        <div className="flex flex-wrap mt-4">
                          {project.tags.map((tag: string) => (
                            <p
                              key={tag}
                              className="border p-1 m-1 rounded border-white/10"
                            >
                              {tag}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Tabs.Content>
              <Tabs.Content className="TabsContent" value="tab3">
                <div className="mx-auto py-20 grid lg:grid-cols-3 gap-4">
                  {graphics.map((project: any) => (
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
                        <h1 className="text-3xl font-bold my-2">
                          {project.title}
                        </h1>
                        <p className="my-4">{project.excerpt}</p>
                        <p className="badge badge-primary">
                          {project.category}
                        </p>
                        <div className="flex flex-wrap mt-4">
                          {project.tags.map((tag: string) => (
                            <p
                              key={tag}
                              className="border p-1 m-1 rounded border-white/10"
                            >
                              {tag}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Tabs.Content>
            </Tabs.Root>
          </div>

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

          {/* <div className="lg:w-2/3 mx-auto py-20 grid lg:grid-cols-3 gap-4">
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
                  <div className="flex flex-wrap mt-4">
                    {project.tags.map((tag: string) => (
                      <p
                        key={tag}
                        className="border p-1 m-1 rounded border-white/10"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Projects;
