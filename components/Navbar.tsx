import Link from "next/link";
import {
  TableCellsIcon,
  SunIcon,
  MoonIcon,
  BookOpenIcon,
  MusicalNoteIcon,
  ClipboardDocumentIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import JKLogo from "../public/images/jk-logo-blue.svg";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import styles from "./NavBar.module.css";

const variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
    },
  },
};

// use the following for x-scroll
// "lg:overflow-hidden overflow-x-scroll whitespace-nowrap"

export default function Navbar() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={variants}
      className="dark:bg-black backdrop-blur-md text-white flex justify-center py-4 fixed top-0 w-full z-50 border-b border-white/10"
    >
      <div className="lg:w-2/3 mx-auto space-x-4 w-full flex lg:justify-between justify-center items-center whitespace-nowrap uppercase text-sm px-4">
        <div>
          <Link
            href="/"
            className="flex items-center space-x-2 hover:text-blue-600 duration-300"
          >
            <Image src={JKLogo} width={50} height={50} alt="jk logo" />
            {/* <p className="lg:block hidden">Jay</p> */}
          </Link>
        </div>
        <div className="flex items-center space-x-2 text-lg">
          <Link
            href="/projects"
            className={
              currentRoute === "/projects" ? styles.active : styles.nonActive
            }
          >
            <div className="flex items-center space-x-2 hover:text-blue-600 duration-300">
              <ClipboardDocumentIcon className="h-6 w-6 text-blue-500 lg:hidden block" />

              <p className="lg:block hidden">Projects</p>
            </div>
          </Link>
          <Link
            href="/music"
            className={
              currentRoute === "/music" ? styles.active : styles.nonActive
            }
          >
            <div className="flex items-center space-x-2 hover:text-blue-600 duration-300">
              <MusicalNoteIcon className="h-6 w-6 text-blue-500 lg:hidden block" />
              <p className="lg:block hidden">Music</p>
            </div>
          </Link>
          <Link
            href="/resume"
            className={
              currentRoute === "/resume" ? styles.active : styles.nonActive
            }
          >
            <div className="flex items-center space-x-2 hover:text-blue-600 duration-300">
              <TableCellsIcon className="h-6 w-6 text-blue-500 lg:hidden block" />
              <p className="lg:block hidden">Resume</p>
            </div>
          </Link>
          <Link
            href="/blog"
            className={
              currentRoute === "/blog" ? styles.active : styles.nonActive
            }
          >
            <div className="flex items-center space-x-2 hover:text-blue-600 duration-300">
              <BookOpenIcon className="h-6 w-6 text-blue-500 lg:hidden block" />
              <p className="lg:block hidden">Blog</p>
            </div>
          </Link>
          <Link
            href="/contact"
            className={
              currentRoute === "/contact" ? styles.active : styles.nonActive
            }
          >
            <div className="flex items-center hover:scale-95 duration-300 bg-sky-400 px-2 p-2 rounded">
              <QuestionMarkCircleIcon className="h-6 w-6 text-blue-500 lg:hidden block" />
              <p className="lg:block hidden">Contact</p>
            </div>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
