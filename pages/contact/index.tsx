import Head from "next/head";
import { NextPage } from "next";
import client from "../../lib/apollo";
import { gql } from "@apollo/client";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="">
        <div className="bg-black">
          <div className="py-20 lg:w-2/3 mx-auto">
            <div className="my-20 py-20">
              <h1 className="text-8xl font-black text-center">Contact</h1>
            </div>

            {/* MUTATION */}
            <form action="" className="grid lg:w-1/2 mx-auto">
              <input
                type="text"
                placeholder="name"
                name=""
                id=""
                className="my-4 py-4 bg-black/0 border-b text-xl font-mono"
              />
              <input
                type="text"
                placeholder="email"
                name=""
                id=""
                className="my-4 py-4 bg-black/0 border-b text-xl font-mono"
              />
              <textarea
                placeholder="type here..."
                className="my-4 py-4 p-4 bg-black/0 border text-xl font-mono h-96"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
