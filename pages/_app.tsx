import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo";
import { motion } from "framer-motion";
// import router from "next/router";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

const variants = {
  pageInitial: {
    opacity: 0,
    transition: {
      delay: 0.2,
    },
  },
  pageAnimate: {
    opacity: 1,
  },
  pageExit: {
    backgroundColor: "blue",
    opacity: 0,
    y: 10,
    transition: {
      delay: 0.2,
    },
  },
};

function MyApp({ Component, pageProps, router }: AppProps) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: { clientX: number; clientY: number }) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <motion.div
        className="cursor z-50"
        variants={{
          default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
          },
          text: {
            height: 75,
            width: 75,
            x: mousePosition.x - 36,
            y: mousePosition.y - 36,
            backgroundColor: "blue",
            opacity: 0.5,
            mixBlendMode: "difference",
          },
        }}
        animate={cursorVariant}
      ></motion.div>
      <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <Navbar />
        <ApolloProvider client={client}>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={variants}
          >
            <ThemeProvider attribute="class">
              <Component {...pageProps} />
            </ThemeProvider>
          </motion.div>
        </ApolloProvider>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
