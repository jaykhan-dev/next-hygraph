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
      {/* <div className="lg:h-screen bg-gradient-to-b from-zinc-800 to-zinc-900">
        <iframe
          src="https://my.spline.design/interactivespherescopy-397558837af7b3db9602d1bcc603c9f9/"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div> */}
      <div className="grid place-items-center bg-black text-white">
        <div className="lg:w-2/3 mx-auto grid lg:grid-cols-3 py-20 opacity-10 hover:opacity-100 duration-500">
          <div className="col-span-1">
            <Image
              src={FooterGraphic}
              height={800}
              width={300}
              alt="footer graphic"
              className=""
            />
          </div>
          <div className="lg:col-span-2 p-4">
            <div className="flex items-center space-x-2">
              {/* <AtSymbolIcon className="h-12 w-12" /> */}
              <h2 className="lg:text-6xl text-4xl font-black border-b border-white/10 py-4 w-full">
                Get in touch
              </h2>
            </div>
            <div>
              <a href="mailto:jaykhan.sound@gmail.com">
                <p className="lg:text-2xl text-xl my-8">
                  jaykhan.sound@gmail.com
                </p>
              </a>
            </div>
            <div className="text-4xl space-x-4">
              <a
                href="https://www.twitter.com/j__khan"
                rel="noreferer noopener"
                target="_blank"
              >
                <i className="fa-brands fa-twitter hover:scale-110 duration-300"></i>
              </a>
              <a
                href="https://github.com/jaykhan-dev"
                rel="noreferer noopener"
                target="_blank"
              >
                <i className="fa-brands fa-github hover:scale-110 duration-300"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/jkhanprofile"
                rel="noreferer noopener"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin hover:scale-110 duration-300"></i>
              </a>
            </div>
            {/* SPLINE */}

            <div className="h-96 my-8 border border-white/10 rounded shadow-xl">
              <iframe
                src="https://my.spline.design/interactivespherescopy-397558837af7b3db9602d1bcc603c9f9/"
                frameBorder="0"
                width="100%"
                height="100%"
              ></iframe>
            </div>

            {/* CONTACT FORM */}

            {/* <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  createMutation({
                    variables: { name: name, email: email, message: message },
                  });
                }}
                action=""
                className="grid space-y-4 py-4 rounded h-full font-mono"
              >
                <input
                  type="text"
                  value={name}
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                  id="name"
                  placeholder="name"
                  className="p-4 bg-black/0 border border-white/10 rounded"
                />
                <input
                  type="text"
                  value={email}
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  placeholder="email"
                  className="p-4 bg-black/0 border border-white/10 rounded"
                />
                <textarea
                  id="message"
                  value={message}
                  onChange={(e: any) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="message"
                  className="h-64 p-4 bg-black/0 border border-white/10 rounded"
                />
                <button className="btn btn-primary lg:w-1/4">Submit</button>
              </form>
            </div> */}
          </div>
        </div>
        <div className="bg-black py-4 mt-8 border-t border-white/10">
          <Marquee speed={50} gradient={false}>
            <p className="uppercase text-xl tracking-wide mx-4">
              There are not more than five musical notes, yet the combinations
              of these five give rise to more melodies than can ever be heard
            </p>
            {/* <p className="uppercase text-xl tracking-wide mx-4">
              I don’t believe a second, compatible implementation of Bitcoin
              will ever be a good idea. So much of the design depends on all
              nodes getting exactly identical results in lockstep that a second
              implementation would be a menace to the network.
            </p> */}
          </Marquee>
        </div>
      </div>
    </footer>
  );
}
