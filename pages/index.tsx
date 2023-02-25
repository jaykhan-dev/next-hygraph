import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect, Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";
import styles from "../components/bgImages.module.css";

const Home: NextPage = () => {
  // const [isLoading, setLoading] = useState<boolean>(true);
  return (
    <>
      <Head>
        <title>Jay Khan</title>
        <meta
          title="description"
          content="Front-end Developer, graphic designer, musician, and Bitcoin Adovocate."
        />
        <meta
          title="keywords"
          content="HTML/CSS, Javascript, Typescript, Next JS, Sveltekit, React, Tailwind CSS, Git, Figma, Adobe Creative Cloud, Photoshop, Illustrator, GraphQL"
        />
      </Head>

      <div className={styles.homeBg}>
        <div className="grid h-screen p-20">
          <div className="text-blue-900 relative lg:w-2/3 mx-auto">
            <div className="lg:absolute top-0 left-0">
              <h1 className="logo lg:text-9xl text-6xl font-black my-4">
                Jay Khan
              </h1>
              <p className="text-2xl my-14">
                Front-end Developer, Graphic Designer, and Musician
              </p>
            </div>
            <div className="lg:absolute bottom-0 right-0 space-x-2">
              <Link href="/projects">
                <button className="px-2 p-4 border border-gray-700/40 rounded-lg w-32 text-white hover:scale-95 duration-300 bg-sky-600">
                  See Projects
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-2 p-4 border border-gray-700/40 rounded-lg w-32 text-white hover:scale-95 duration-300 bg-green-600">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <iframe
            src="https://my.spline.design/3dtextbluecopy-f0c77556ac39fd5f52cac8cbead7811b/"
            frameBorder="0"
            width="100%"
            height="100%"
          ></iframe> */}
      </div>
    </>
  );
};

export default Home;
