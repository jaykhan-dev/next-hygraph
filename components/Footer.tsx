import Image from "next/image";
import FooterGraphic from "../public/images/footer-graphic.png";
import Marquee from "react-fast-marquee";

/*
type Contact = {
  id: string;
  name: string;
  email: string;
  message: string;
};
*/

export default function Footer() {
  return (
    <footer className="">
      <div className="grid place-items-center bg-black text-white">
        <div className="bg-black py-4 border-t border-white/10">
          <Marquee speed={50} gradient={false}>
            <p className="uppercase text-xl tracking-wide mx-4">
              There are not more than five musical notes, yet the combinations
              of these five give rise to more melodies than can ever be heard
            </p>
          </Marquee>
        </div>
      </div>
    </footer>
  );
}
