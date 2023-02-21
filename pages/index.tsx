import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import client from "../lib/apollo";
import { gql } from "@apollo/client";
import Link from "next/link";
import styles from "../components/bgImages.module.css";
import { useState } from "react";
import JK from "../public/images/jaykhan.jpg";
import Script from "next/script";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import * as Tabs from "@radix-ui/react-tabs";
import tabStyles from "../components/radixTabs.module.css";
import GET_PROJECTS from "../lib/projectAll";
import GET_GRAPHICS_PROJECTS from "../lib/projectGraphics";
import GET_WEB_PROJECTS from "../lib/projectWeb";

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
const heroVariants = {
  hidden: {
    x: 10,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};

const Home: NextPage = ({ projects, frontend, graphics }: any) => {
  if (!projects) return <div>No Data!</div>;

  return (
    <>
      <Head>
        <title>Jay Khan</title>
        <meta
          title="description"
          content="Front-end Developer, graphic designer, musician, and Bitcoin Adovocate."
        />

        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
      </Head>

      <div className="grid place-items-center h-screen">
        <iframe
          src="https://my.spline.design/3dtextbluecopy-f0c77556ac39fd5f52cac8cbead7811b/"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
};

export default Home;
