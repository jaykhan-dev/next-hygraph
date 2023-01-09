import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";
import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { TableCellsIcon } from "@heroicons/react/24/outline";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import JKLogo from "../public/images/jk-logo-blue.svg";

// use the following for x-scroll
// "lg:overflow-hidden overflow-x-scroll whitespace-nowrap"

export default function Navbar() {
  return (
    <nav className="bg-black/90 backdrop-blur-md text-white flex justify-center py-4 fixed top-0 w-full z-50 border-b border-white/10">
      <div className="lg:w-2/3 mx-auto space-x-4 w-full flex lg:justify-between justify-center items-center whitespace-nowrap uppercase text-sm px-4">
        <div>
          <Link
            href="/"
            className="flex items-center space-x-2 hover:scale-105 duration-300"
          >
            <Image src={JKLogo} width={35} height={35} alt="jk logo" />
            <p className="lg:block hidden">Jay</p>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <Link
            href="/projects"
            className="flex items-center space-x-2 hover:scale-105 duration-300"
          >
            <ClipboardDocumentIcon className="h-6 w-6 text-blue-500" />
            <p className="lg:block hidden">Projects</p>
          </Link>
          <Link
            href="/music"
            className="flex items-center space-x-2 hover:scale-105 duration-300"
          >
            <MusicalNoteIcon className="h-6 w-6 text-blue-500" />
            <p className="lg:block hidden">Music</p>
          </Link>
          <Link
            href="/resume"
            className="flex items-center space-x-2 hover:scale-105 duration-300"
          >
            <TableCellsIcon className="h-6 w-6 text-blue-500" />
            <p className="lg:block hidden">Resume</p>
          </Link>
        </div>
        {/* <Link href="/tech-blog" className="flex items-center space-x-2">
          <ComputerDesktopIcon className="h-6 w-6 text-blue-500" />
          <p className="lg:block hidden">Tech Blog</p>
        </Link> */}
        {/* <Link href="/contact" className="flex items-center space-x-2">
          <AtSymbolIcon className="h-6 w-6 text-blue-500" />
          <p className="lg:block hidden">Contact</p>
        </Link> */}
      </div>
    </nav>
  );
}
