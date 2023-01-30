import { useMutation } from "@apollo/client";
import { useState } from "react";
import CONTACT from "../../lib/createContact";

/*
type Contact = {
  id: string;
  name: string;
  email: string;
  message: string;
};
*/

export default function Footer() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [createMutation, { data, loading, error }] = useMutation(CONTACT);

  if (loading) return <div>Loading!</div>;
  if (error) return <div>There was an error!</div>;

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
      <div className="grid place-items-center bg-gradient-to-b from-black to-zinc-900 text-white">
        <div className="lg:w-2/3 mx-auto grid py-20">
          {/* <div className="col-span-1">
            <Image
              src={}
              height={800}
              width={300}
              alt="footer graphic"
              className=""
            />
          </div> */}
          <div className="p-4">
            <div className="flex items-center space-x-2">
              {/* <AtSymbolIcon className="h-12 w-12" /> */}
              <h2 className="lg:text-6xl text-4xl font-black text-center py-4 w-full">
                Inquiry
              </h2>
            </div>

            {/* CONTACT FORM */}

            <div className="lg:w-2/3 mx-auto my-12">
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
                  className="p-4 bg-black/0 border border-white/10 rounded hover:border-white/100 duration-300"
                />
                <input
                  type="text"
                  value={email}
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  placeholder="email"
                  className="p-4 bg-black/0 border border-white/10 rounded hover:border-white/100 duration-300"
                />
                <textarea
                  id="message"
                  value={message}
                  onChange={(e: any) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="message"
                  className="h-64 p-4 bg-black/0 border border-white/10 rounded hover:border-white/100 duration-300"
                />
                <div className="flex justify-center">
                  <button className="btn btn-primary my-12">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
