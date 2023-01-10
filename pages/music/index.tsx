import client from "../../lib/apollo";
import { gql } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";

export async function getServerSideProps() {
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

const Music: NextPage = ({ tracks }: any) => {
  return (
    <>
      <Head>
        <title>Jay Khan Music</title>
      </Head>
      <div className="">
        <div className="bg-gradient-to-b from-black/90 to-zinc-900">
          <div className="text-center lg:w-2/3 mx-auto">
            <div className="py-20 w-full text-center flex justify-center items-center space-x-1">
              <div className="my-16">
                {/* <Image
                src={Horse}
                width={100}
                height={200}
                alt="campfire graphic"
              /> */}
              </div>
              <h1 className="lg:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800">
                Music
              </h1>
            </div>

            {/* data */}
            <div className="p-4">
              {tracks.map((track: any) => (
                <div
                  key={track.id}
                  className="lg:flex items-center justify-between border-b border-white/10 py-4 opacity-50 hover:opacity-100 duration-300"
                >
                  <h2 className="font-bold text-xl text-left">{track.title}</h2>

                  {track.track.map((audio: any) => (
                    <div key={audio.id}>
                      <audio controls src={audio.url}></audio>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
