import client from "../../lib/apollo";
import { gql } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
import { motion } from "framer-motion";
import styles from "../../components/bgImages.module.css";
import * as Tabs from "@radix-ui/react-tabs";
import tabStyles from "../../components/radixTabs.module.css";
import Link from "next/link";

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
      <div id="" className="text-blue-900">
        <div className={styles.musicBg}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={headerVariants}
            className="text-white py-20 mt-20 w-full lg:w-2/3 mx-auto lg:flex items-center space-x-2"
          >
            <div className="grid lg:place-items-start place-items-center">
              <i className="fa-solid fa-music text-6xl border p-4 rounded-lg"></i>
            </div>
            <div className="lg:text-start text-center">
              <h1 className="text-4xl font-black">Music</h1>
              <div className="">
                <p className="lg:w-2/3">
                  I've been producing music since 2007. I'm making plans on
                  releasing new content asap.
                </p>
              </div>
            </div>
          </motion.div>
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
                  <Tabs.Trigger className={tabStyles.TabsTrigger} value="tab1">
                    <div className="flex items-center space-x-2">
                      <i className="fa-solid fa-compact-disc lg:text-xl text-4xl"></i>
                      <p className="lg:flex hidden text-xl">Albums</p>
                    </div>
                  </Tabs.Trigger>
                  <Tabs.Trigger className={tabStyles.TabsTrigger} value="tab2">
                    <div className="flex items-center space-x-2">
                      <i className="fa-solid fa-list lg:text-xl text-4xl"></i>
                      <p className="lg:flex hidden text-xl">Tracks</p>
                    </div>
                  </Tabs.Trigger>
                </Tabs.List>
              </div>
            </div>
            <div className="lg:w-2/3 mx-auto">
              <Tabs.Content className="TabsContent" value="tab1">
                <div className="h-96 my-20">
                  <p>coming soon!</p>
                </div>
              </Tabs.Content>
              <Tabs.Content className="TabsContent" value="tab2">
                <div className="grid gap-4 h-full py-20">
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
                </div>
              </Tabs.Content>
            </div>
          </Tabs.Root>
        </div>
      </div>
    </>
  );
};

export default Music;
