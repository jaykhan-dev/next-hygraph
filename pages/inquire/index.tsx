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
  const [formSuccess, setFormSuccess] = useState<boolean>(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState<string>("");
  const [createMutation, { data, loading, error }] = useMutation(CONTACT);

  if (loading) return <div>Loading!</div>;
  if (error) return <div>There was an error!</div>;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    createMutation({
      variables: {
        name: name,
        email: email,
        message: message,
      },
    });
    alert("Message sent!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <footer className="">
      <div className="grid place-items-center text-white">
        <div className="lg:w-2/3 mx-auto grid py-20">
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
                method="POST"
                onSubmit={handleSubmit}
                action=""
                id="contactForm"
                className="grid space-y-4 py-4 rounded h-full font-mono"
              >
                <input
                  type="text"
                  value={name}
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                  required
                  id="name"
                  placeholder="name"
                  className="p-4 bg-black/0 border border-white/10 rounded hover:border-white/100 duration-300"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                  }}
                  required
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
                  required
                  placeholder="message"
                  className="h-64 p-4 bg-black/0 border border-white/10 rounded hover:border-white/100 duration-300"
                />
                <div className="flex justify-center">
                  <button className="btn btn-primary my-12" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
