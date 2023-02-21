import client from "../../lib/apollo";
import { gql } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query allMusic {
        tracks {
          title
          id
          slug
          producer {
            id
          }
          track {
            url
            id
          }
        }
      }
    `,
  });

  return {
    props: {
      tracks: data.tracks,
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

const Music: NextPage = ({ tracks }: any) => {
  return (
    <>
      <Head>
        <title>Jay Khan Music</title>
        <meta
          title="description"
          content="Jay Khan Sound.  Music Production.  Ableton."
        />
      </Head>
      <div id="musicIndex" className="bg-white text-blue-900 lg:p-0 p-4">
        <div className="lg:h-screen">
          <div className="lg:w-2/3 mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={headerVariants}
              className="pt-24 w-full"
            >
              <h1 className="lg:text-4xl font-black">Music</h1>
              <div className="my-4 p-4 rounded border border-blue-900/40 shadow-xl">
                <h2 className="text-4xl font-bold">Sound Production</h2>
                <p>
                  I've been producing music since 2007. I'm making plans on
                  releasing new content asap.
                </p>
              </div>
            </motion.div>

            {/* data */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="grid gap-4 mt-24 h-full"
            >
              {/* <div className="border border-blue-900/40 p-4 shadow-xl bg-gray-100 rounded my-2 sticky top-24">
                <h2>Album</h2>
              </div> */}
              <div className="col-span">
                {tracks.map((track: any) => (
                  <div
                    key={track.id}
                    className="lg:flex items-center justify-between border border-blue-900/40 rounded px-4 bg-gray-100 hover:shadow-xl py-4 opacity-80 hover:opacity-100 duration-300 my-2"
                  >
                    <h2 className="font-bold text-xl text-left">
                      {track.title}
                    </h2>

                    {track.track.map((audio: any) => (
                      <div key={audio.id}>
                        <audio controls src={audio.url}></audio>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
