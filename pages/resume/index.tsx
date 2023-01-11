import Head from "next/head";
// import Image from "next/image";
import client from "../../lib/apollo";
import { gql } from "@apollo/client";
import type { NextPage } from "next";
import { LanguageIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
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
      </Head>
      <div className="block bg-zinc-900">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="py-20 bg-gradient-to-b from-black to-zinc-900 w-full text-center flex justify-center items-center border-b border-white/10"
        >
          {/* <Image
            src={Wanderer}
            width={200}
            height={200}
            alt="wanderer graphic"
          /> */}
          <h1 className="my-4 lg:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800">
            Resume
          </h1>
        </motion.div>

        {/* DATA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="lg:w-2/3 mx-auto p-2 grid lg:grid-cols-3 gap-10"
        >
          <div className="my-8 lg:sticky top-24 lg:h-screen">
            <h1 className="lg:text-4xl font-black">Summary</h1>
            <p className="italic my-4">
              The two main skills I bring to the table are graphic design and
              front-end development. By staying up-to-date on modern tools like
              Next JS, Sveltekit, Tailwind CSS, and Figma I strive to make
              responsive, accessible, and performant websites and applications.{" "}
            </p>
            <div className="border-t border-white/10 py-8">
              <div className="flex items-center space-x-2">
                <CodeBracketIcon className="w-6 h-6" />
                <h2 className="text-2xl my-4">Software</h2>
              </div>
              <ul>
                <li>HTML/CSS/JS</li>
                <li>Next JS</li>
                <li>Sveltekit</li>
                <li>Tailwind CSS</li>
                <li>GraphQL</li>
                <li>REST API</li>
                <li>PostgreSQL</li>
                <li>WordPress</li>
              </ul>
            </div>
            <div className="border-t border-white/10 py-8">
              <div className="flex items-center space-x-2">
                <LanguageIcon className="h-6 w-6" />
                <h2 className="text-2xl my-4">Languages</h2>
              </div>
              <ul>
                <li>English: Fluent</li>
                <li>Urdu: Conversational</li>
                <li>French: Beginner reading</li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-2 py-8">
            <h1 className="text-4xl font-bold">Work Experience</h1>
            {jobs.map((job: any) => (
              <div
                key={job.id}
                className="p-4 py-8 border border-white/20 rounded my-4"
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
