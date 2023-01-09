import Image from "next/image";
import FooterGraphic from "../public/images/footer-graphic.png";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import Marquee from "react-fast-marquee";

export default function Footer() {
  return (
    <footer className="">
      {/* <div className="lg:h-screen bg-gradient-to-b from-zinc-800 to-zinc-900">
        <iframe
          src="https://my.spline.design/interactivespherescopy-397558837af7b3db9602d1bcc603c9f9/"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div> */}
      <div className="grid place-items-center bg-gradient-to-b from-zinc-900 to-black text-white">
        <div className="lg:w-2/3 mx-auto grid lg:grid-cols-3 py-20">
          <div>
            <Image
              src={FooterGraphic}
              height={800}
              width={300}
              alt="footer graphic"
              className="opacity-10 hover:opacity-50 duration-500"
            />
          </div>
          <div className="lg:col-span-2 p-4">
            <div className="flex items-center space-x-2">
              {/* <AtSymbolIcon className="h-12 w-12" /> */}
              <h2 className="text-6xl font-black border-b border-white/10 py-4 w-full">
                Get in touch
              </h2>
            </div>
            <div>
              <a href="#">
                <p className="text-2xl my-8">jaykhan.sound@gmail.com</p>
              </a>
            </div>
            <div className="text-4xl space-x-4">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
        <div className="w-full bg-black py-4 mt-8">
          <Marquee speed={100} gradient={false}>
            <p className="uppercase text-xl tracking-wide mx-4">
              There are only 5 notes but more melodies can be made with these
              than can ever be heard
            </p>
            <p className="uppercase text-xl tracking-wide mx-4">
              The supreme art of war is to subdue the enemy without fighting.
            </p>
          </Marquee>
        </div>
      </div>
    </footer>
  );
}
