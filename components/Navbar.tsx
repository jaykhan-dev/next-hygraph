import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";
import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { TableCellsIcon } from "@heroicons/react/24/outline";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { AtSymbolIcon } from "@heroicons/react/24/outline";

// use the following for x-scroll
// "lg:overflow-hidden overflow-x-scroll whitespace-nowrap"

export default function Navbar() {
  return (
    <nav className="bg-black/90 backdrop-blur-md text-white flex justify-center py-4 fixed top-0 w-full z-50 border-b border-white/10">
      <div className="lg:w-2/3 mx-auto space-x-4 w-full flex justify-center items-center whitespace-nowrap uppercase text-sm">
        <Link href="/" className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 text-blue-500" />
          <p className="lg:block hidden">Home</p>
        </Link>
        <Link href="/projects" className="flex items-center space-x-2">
          <ClipboardDocumentIcon className="h-6 w-6 text-blue-500" />
          <p className="lg:block hidden">Projects</p>
        </Link>
        <Link href="/music" className="flex items-center space-x-2">
          <MusicalNoteIcon className="h-6 w-6 text-blue-500" />
          <p className="lg:block hidden">Music</p>
        </Link>
        <Link href="/resume" className="flex items-center space-x-2">
          <TableCellsIcon className="h-6 w-6 text-blue-500" />
          <p className="lg:block hidden">Resume</p>
        </Link>
        {/* <Link href="/tech-blog" className="flex items-center space-x-2">
          <ComputerDesktopIcon className="h-6 w-6 text-blue-500" />
          <p className="lg:block hidden">Tech Blog</p>
        </Link> */}
        <Link href="/contact" className="flex items-center space-x-2">
          <AtSymbolIcon className="h-6 w-6 text-blue-500" />
          <p className="lg:block hidden">Contact</p>
        </Link>
      </div>
    </nav>
  );
}
