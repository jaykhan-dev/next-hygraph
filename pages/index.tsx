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
    <>
      <Head>
        <title>Jay Khan</title>
        <meta
          title="description"
          content="I design and build user interfaces and digital assets"
        />
        <link rel="icon" href="/jk-favicon-transparent.ico" />
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
      </Head>

      <div className={styles.bgImageHome}>
        <div className="py-20 bg-gradient-to-b from-zinc-900/80 to-zinc-900">
          <div className="grid place-items-center">
            <div className="grid place-items-center p-4">
              <Image
                src={JK}
                alt="logo"
                width={150}
                height={100}
                className="rounded-full border-4 border-blue-600"
              />

              <h1 className="lg:text-9xl text-6xl text-center my-4 font-black logo bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-600">
                Jay Khan
              </h1>
              <p className="text-2xl my-8 text-center">
                I design and build user interfaces and digital assets
              </p>
              <Link href="/projects">
                <button className="btn btn-primary">See Projects</button>
              </Link>
            </div>
            <div className="grid lg:grid-cols-3 gap-4 my-8 lg:w-1/2 mx-auto text-center p-4">
              <div className="border border-white/10 p-4 rounded grid place-items-center">
                {/* @ts-ignore */}
                <lottie-player
                  src="https://assets2.lottiefiles.com/packages/lf20_7frdqxon.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                />

                <h2 className="text-3xl font-bold my-4">Frontend Developer</h2>
                <p>
                  Using JavaScript libraries and frameworks like React, NextJS,
                  Vue, SvelteKit
                </p>
                {/* <Link href="/projects">
                <button className="btn btn-outline">See Projects</button>
              </Link> */}
              </div>

              <div className="border border-white/10 p-4 rounded grid place-items-center">
                {/* @ts-ignore */}
                <lottie-player
                  src="https://assets10.lottiefiles.com/packages/lf20_oiay4ye1.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                />
                <h2 className="text-3xl font-bold my-4">
                  Graphic <br /> Designer
                </h2>
                <p>
                  {" "}
                  Designing websites, marketing material, digital assets, visual
                  storytelling etc.
                </p>
                {/* <Link href="/projects">
                  <button className="btn btn-outline">See Projects</button>
                </Link> */}
              </div>

              <div className="border border-white/10 p-4 rounded grid place-items-center">
                {/* @ts-ignore */}
                <lottie-player
                  src="https://assets7.lottiefiles.com/packages/lf20_oNHjED.json"
                  background="transparent"
                  speed="0.8"
                  loop
                  autoplay
                />
                <h2 className="text-3xl font-bold my-4">
                  Bitcoin <br />
                  Advocate
                </h2>
                <p>
                  Bitcoin is one of the greatest innovations in technology and
                  opens up many possibilities.
                </p>
                {/* <Link href="/projects">
                  <button className="btn btn-outline">See Projects</button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
