import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import client from "../lib/apollo";
import { gql } from "@apollo/client";
import Link from "next/link";
import styles from "../components/bgImages.module.css";
import useSound from "use-sound";
// import Hover from "../../resources/hover.mp3";
import { useState } from "react";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          title
          id
          slug
          date
          excerpt
          tags
          coverImage {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data.posts,
    },
  };
}

const Home: NextPage = ({ posts }: any) => {
  if (!posts) return <div>No Data!</div>;

  // const soundUrl = "../../resources/hover.mp3";
  // const [play, { stop }] = useSound(soundUrl, { volume: 0.5 });
  // const [isHovering, setIsHovering] = useState(false);

  return (
    <div className={styles.bgImageHome}>
      <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-zinc-900/90">
        <Head>
          <title>Jay Khan</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="">
          <h1 className="text-9xl my-8 font-black logo bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Jay Khan
          </h1>
          <p>Frontend Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
