import Head from "next/head";
// import Image from "next/image";
import client from "../../lib/apollo";
import { gql } from "@apollo/client";
import type { NextPage } from "next";
//import { LanguageIcon, CodeBracketIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
// import Wanderer from "../../public/images/wanderer.png";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query allJobs {
        jobs {
          id
          title
          company
          companyLink
          location
          period
          summary {
            html
          }
        }
      }
    `,
  });

  return {
    props: {
      jobs: data.jobs,
    },
  };
}

const headerVariants = {
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

const Resume: NextPage = ({ jobs }: any) => {
  if (!jobs) return <div>no jobs!</div>;
  return (
    <>
      <Head>
        <title>Jay Khan Resume</title>
        <meta
          title="description"
          content="I'm a front-end developer using modern tools like Next JS, Sveltekit, Tailwind CSS, GraphQL, REST, Headless CMS."
        />
        <meta
          title="keywords"
          content="HTML/CSS, Javascript, Typescript, Next JS, Sveltekit, React, Tailwind CSS, Git, Figma, Adobe Creative Cloud, Photoshop, Illustrator, GraphQL"
        />
      </Head>
      <div className="bg-white text-blue-900 py-4">
        {/* DATA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="lg:w-2/3 mx-auto p-2 grid lg:grid-cols-3 gap-10"
        >
          <div className="my-8 lg:sticky top-24 lg:h-screen space-y-4 lg:pt-0 pt-20">
            <h1 className="lg:text-2xl text-xl font-black">Summary</h1>
            <p className="italic my-4">
              The two main skills I bring to the table are graphic design and
              front-end development. By staying up-to-date on modern tools like
              Next JS, Sveltekit, Tailwind CSS, and Figma I strive to make
              responsive, accessible, and performant websites and applications.{" "}
            </p>
            <div className="border border-blue-900/40 grid lg:grid-cols-2 gap-2 py-4 p-4 rounded-lg shadow-xl bg-gray-100">
              {/* SOFTWARE */}
              <div>
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-code"></i>
                  <h2 className="text-2xl">Software</h2>
                </div>
                <ul>
                  <li>HTML/CSS/JS</li>
                  <li>Typescript</li>
                  <li>Next JS</li>
                  <li>Sveltekit</li>
                  <li>Tailwind CSS</li>
                  <li>Git</li>
                  <li>GraphQL</li>
                  <li>REST API</li>
                  <li>PostgreSQL</li>
                  <li>WordPress</li>
                  <li>Adobe CC</li>
                  <li>Figma</li>
                </ul>
              </div>

              {/* LANGUAGES */}
              <div>
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-language"></i>
                  <h2 className="text-2xl">Languages</h2>
                </div>
                <ul>
                  <li>
                    <b>English:</b> Fluent
                  </li>
                  <li>
                    <b>Urdu:</b> Conversational
                  </li>
                  <li>
                    <b>French:</b> Beginner reading
                  </li>
                </ul>
              </div>
            </div>
            <div className="border border-blue-900/40 rounded-lg bg-gray-100 shadow-xl space-y-2 p-4">
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-graduation-cap"></i>
                <h2 className="text-2xl my-4">Education</h2>
              </div>
              <ul>
                <li>Carleton University: 2007-2012</li>
                <li>Algonquin College: 2007-2011</li>
              </ul>
              <p className="italic">Interactive Multimedia and Design</p>
            </div>
          </div>
          <div className="lg:col-span-2 mt-20">
            <h1 className="text-5xl font-bold">Work Experience</h1>
            {jobs.map((job: any) => (
              <div
                key={job.id}
                className="p-4 py-8 border border-blue-900/40 shadow-xl rounded-lg my-4"
              >
                <h1 className="text-2xl font-bold">{job.title}</h1>
                <p className="text-6xl my-4">{job.company}</p>
                {/* <a href={job?.companyLink} rel="noreferrer" target="_blank">
                  <button className="btn btn-outline btn-sm bg-gradient-to-r from-blue-600 to-violet-600 hover:scale-95 duration-300 my-4">
                    Official Site
                  </button>
                </a> */}
                <p className="text-sm uppercase my-4">{job.period}</p>
                <article
                  className=""
                  dangerouslySetInnerHTML={{ __html: job.summary.html }}
                ></article>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Resume;
