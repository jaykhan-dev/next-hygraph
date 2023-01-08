import Head from "next/head";
import client from "../../lib/apollo";
import { gql } from "@apollo/client";
import type { NextPage } from "next";

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
      <div className="grid place-items-center">
        <div className="my-14 py-20 bg-gradient-to-r from-blue-600 to-violet-600 w-full text-center">
          <h1 className="lg:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-800">
            Resume
          </h1>
        </div>

        {/* DATA */}
        <div className="lg:w-1/2 mx-auto p-2">
          <div className="my-8">
            <h1 className="lg:text-4xl font-black">Summary</h1>
            <p className="text-2xl italic leading-loose my-8 p-4">
              The two main skills I bring to the table are graphic design and
              front-end development. By staying up-to-date on modern tools like
              Next JS, Sveltekit, Tailwind CSS, and Figma I strive to make
              responsive, accessible, and performant websites and applications.{" "}
            </p>
          </div>
          <div>
            <h1>Work Experience</h1>
            {jobs.map((job: any) => (
              <div
                key={job.id}
                className="p-4 py-8 border border-white/20 rounded my-4"
              >
                <h1 className="text-2xl font-bold">{job.title}</h1>
                <p className="text-xl my-4">{job.company}</p>
                <a href={job?.companyLink} rel="noreferrer" target="_blank">
                  <button className="btn btn-primary">Official Site</button>
                </a>
                <p>{job.period}</p>
                <article
                  dangerouslySetInnerHTML={{ __html: job.summary.html }}
                ></article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
