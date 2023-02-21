import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>();

  return (
    <>
      <Head>
        <title>Jay Khan</title>
        <meta
          title="description"
          content="Front-end Developer, graphic designer, musician, and Bitcoin Adovocate."
        />
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
