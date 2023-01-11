import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo";
import { motion } from "framer-motion";
// import router from "next/router";

const variants = {
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    opacity: 1,
  },
  pageExit: {
    backgroundColor: "black",
    opacity: 0,
    y: 10,
    transition: {
      delay: 0.2,
    },
  },
};

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Navbar />
      <ApolloProvider client={client}>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={variants}
        >
          <Component {...pageProps} />
        </motion.div>
      </ApolloProvider>
      <Footer />
    </>
  );
}

export default MyApp;
