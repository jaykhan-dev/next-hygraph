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
        <div className="bg-gradient-to-b from-zinc-900/90 to-zinc-900">
          <div className="py-20 text-center lg:w-2/3 mx-auto">
            <div className="my-20">
              <h1 className="text-8xl font-black">Music</h1>
            </div>

            {/* data */}
            <div className="p-4">
              {tracks.map((track: any) => (
                <div
                  key={track.id}
                  className="lg:flex items-center justify-between border-b border-white/10 py-4"
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
