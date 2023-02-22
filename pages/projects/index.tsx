import client from "../../lib/apollo";
import { gql } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import styles from "../../components/bgImages.module.css";

import { Button } from "react-daisyui";
import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import tabStyles from "../../components/radixTabs.module.css";
import {
  GET_GRAPHICS_PROJECTS,
  GET_PROJECTS,
  GET_WEB_PROJECTS,
} from "../../lib/projectQueries";

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

      <div className="text-blue-900">
        <div className="">
          {/* HEADER */}
          <div className={styles.projectBg}>
            <div className="lg:w-2/3 mx-auto lg:flex items-center lg:text-start text-center space-x-2 mt-20 py-20 text-white p-4">
              <div className="flex lg:justify-start justify-center">
                <i className="fa-solid fa-laptop-file text-6xl border p-4 rounded-lg"></i>
              </div>
              <div>
                <h1 className="text-4xl font-black">Projects</h1>

                <p className="lg:w-2/3">
                  Front-end Development using React, Sveltekit, Vue and Graphic
                  design using the Adobe Creative Cloud
                </p>
              </div>
            </div>
          </div>

          {/* FILTER */}
          <div className="mx-auto bg-white lg:p-0 p-4">
            <Tabs.Root className={tabStyles.TabsRoot} defaultValue="tab1">
              <div className="border-b py-4">
                <div className="flex justify-start whitespace-nowrap w-2/3 mx-auto">
                  <Tabs.List
                    className={tabStyles.TabsList}
                    aria-label="Manage your account"
                  >
                    <Tabs.Trigger
                      className={tabStyles.TabsTrigger}
                      value="tab1"
                    >
                      <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-list lg:text-xl text-4xl"></i>
                        <p className="lg:flex hidden text-xl">All</p>
                      </div>
                    </Tabs.Trigger>
                    <Tabs.Trigger
                      className={tabStyles.TabsTrigger}
                      value="tab2"
                    >
                      <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-desktop lg:text-xl text-4xl"></i>
                        <p className="lg:flex hidden text-xl">Front-end</p>
                      </div>
                    </Tabs.Trigger>
                    <Tabs.Trigger
                      className={tabStyles.TabsTrigger}
                      value="tab3"
                    >
                      <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-draw-polygon lg:text-xl text-4xl"></i>
                        <p className="lg:flex hidden text-xl">Graphic Design</p>
                      </div>
                    </Tabs.Trigger>
                  </Tabs.List>
                </div>
              </div>
              <Tabs.Content className="TabsContent" value="tab1">
                <div className="mx-auto py-10 grid lg:grid-cols-3 gap-4 lg:w-2/3">
                  {projects.map((project: any) => (
                    <Link
                      key={project.id}
                      href={`/projects/${project.slug}`}
                      className="border border-blue-900 rounded my-4 hover:shadow-xl p-1 hover:scale-95 duration-200"
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
                              className="border p-1 m-1 rounded border-blue-900"
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
                <div className="mx-auto py-10 grid lg:grid-cols-3 gap-4 lg:w-2/3">
                  {frontend.map((project: any) => (
                    <Link
                      key={project.id}
                      href={`/projects/${project.slug}`}
                      className="border border-blue-900 rounded my-4 hover:shadow-xl p-1 hover:scale-95 duration-200"
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
                              className="border p-1 m-1 rounded border-blue-900"
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
                <div className="mx-auto py-10 grid lg:grid-cols-3 gap-4 lg:w-2/3">
                  {graphics.map((project: any) => (
                    <Link
                      key={project.id}
                      href={`/projects/${project.slug}`}
                      className="border border-blue-900 rounded my-4 hover:shadow-xl p-1 hover:scale-95 duration-200"
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
                              className="border p-1 m-1 rounded border-blue-900"
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
        </div>
      </div>
    </>
  );
};

export default Projects;
