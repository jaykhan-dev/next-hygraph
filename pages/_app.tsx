import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <Footer />
    </>
  );
}

export default MyApp;
