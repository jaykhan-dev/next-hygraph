import { useMutation } from "@apollo/client";
import { useState } from "react";
import CONTACT from "../../lib/createContact";
import styles from "../../components/bgImages.module.css";

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
    <footer className="text-blue-900 lg:p-0">
      <div className={styles.contactBg}>
        <div className="py-20 mt-20 lg:w-2/3 mx-auto lg:flex items-center space-x-2 text-white">
          <div className="grid lg:place-items-center place-items-center">
            <i className="fa-solid fa-comments text-6xl border p-4 rounded-lg"></i>
          </div>
          <div className="lg:text-start text-center">
            <h2 className="text-4xl font-black w-full">Inquiry</h2>
            <div className="">
              <p>
                I would be happy to discuss a potential project, or talk about
                technology and art
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white lg:p-0 p-4">
        <div className="grid lg:grid-cols-3 gap-4 py-20 lg:w-2/3 mx-auto">
          <div className="py-8 space-y-4 border border-blue-900/40 p-4 rounded shadow-xl bg-gray-100">
            <p className="text-2xl">
              Contact me directly through the following channels.
            </p>
            <div className="flex items-center space-x-4">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:jaykhan.sound@gmail.com">
                jaykhan.sound@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <i className="fa-solid fa-phone"></i>
              <p>613-707-0696</p>
            </div>

            <a
              href="https://www.twitter.com/j__khan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4"
            >
              <i className="fa-brands fa-twitter"></i>
              <p>@j__khan</p>
            </a>

            <a
              href="https://github.com/jaykhan-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4"
            >
              <i className="fa-brands fa-github"></i>
              <p>jaykhan-dev</p>
            </a>
          </div>

          {/* CONTACT FORM */}

          <div className="lg:col-span-2 bg-gray-100 rounded-lg shadow-xl border border-blue-900/40">
            <form
              method="POST"
              onSubmit={handleSubmit}
              action=""
              id="contactForm"
              className="grid rounded h-full font-mono"
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
                className="p-4 bg-black/0 border-b duration-300"
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
                className="p-4 bg-black/0 border-b duration-300"
              />
              <textarea
                id="message"
                value={message}
                onChange={(e: any) => {
                  setMessage(e.target.value);
                }}
                required
                placeholder="message"
                className="h-64 p-4 bg-black/0 border-b duration-300"
              />
              <div className="flex justify-start">
                <button
                  className="px-4 py-4 hover:bg-gray-200 duration-300 w-full"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
