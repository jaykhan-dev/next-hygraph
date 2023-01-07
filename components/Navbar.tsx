import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-center py-4 fixed top-0 w-full z-50">
      <div className="lg:w-2/3 mx-auto space-x-4 w-full flex justify-center lg:overflow-hidden overflow-x-scroll items-center whitespace-nowrap">
        <Link href="/">Home</Link>
        <Link href="/music">Music</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/tech-blog">Tech Blog</Link>
        <Link href="/tech-stack">Tech Stack</Link>
      </div>
    </nav>
  );
}
