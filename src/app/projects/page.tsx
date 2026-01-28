import Link from "next/link";
import Image from "next/image";
import SidebarNav from "../components/SidebarNav";

const projects = [
  {
    name: "DeCleanup",
    logo: "https://avatars.githubusercontent.com/u/145981044?s=200&v=4",
    description: "A decentralized platform for organizing and rewarding real-world environmental cleanups.",
    twitter: "https://twitter.com/decleanup",
    telegram: "https://t.me/decleanup",
    github: "https://github.com/decleanup"
  },
  {
    name: "Regen Bazaar",
    logo: "https://avatars.githubusercontent.com/u/145981044?s=200&v=4",
    description: "A marketplace for regenerative goods and services, supporting local and global impact.",
    twitter: "https://twitter.com/regenbazaar",
    telegram: "https://t.me/regenbazaar",
    github: "https://github.com/regenbazaar"
  },
  {
    name: "ReFi Phangan",
    logo: "https://avatars.githubusercontent.com/u/145981044?s=200&v=4",
    description: "A community-driven ReFi hub on Koh Phangan, Thailand, fostering sustainability and innovation.",
    twitter: "https://twitter.com/refiphangan",
    telegram: "https://t.me/refiphangan",
    github: "https://github.com/refiphangan"
  },
  {
    name: "Ru",
    logo: "https://avatars.githubusercontent.com/u/145981044?s=200&v=4",
    description: "A privacy-first, open-source wallet for the next generation of regenerative finance.",
    twitter: "https://twitter.com/ruwallet",
    telegram: "https://t.me/ruwallet",
    github: "https://github.com/ruwallet"
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen flex flex-row" style={{ background: "linear-gradient(135deg, #232526 0%, #414345 100%)" }}>
      <SidebarNav />
      <main className="flex-1 flex flex-col items-center px-4 py-10 gap-12 ml-48 text-white">
        <h1 className="text-4xl font-bold mb-6">Our Projects</h1>
        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.name} className="bg-black/70 rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center border-2 border-teal-500">
              <Image src={project.logo} alt={project.name + ' Logo'} width={96} height={96} className="w-24 h-24 rounded-full mb-4 border-4 border-teal-400 shadow-lg bg-white object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="mb-4 text-base text-white/90">{project.description}</p>
              <div className="flex gap-6 mt-2">
                <Link href={project.twitter} target="_blank" className="hover:text-teal-300 transition-colors" aria-label="Twitter">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z"/></svg>
                </Link>
                <Link href={project.telegram} target="_blank" className="hover:text-teal-300 transition-colors" aria-label="Telegram">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4.93 7.36l-1.43 6.77c-.11.48-.39.6-.78.37l-2.16-1.59-1.04 1c-.12.12-.23.23-.47.23l.17-2.38 4.34-3.92c.19-.17-.04-.27-.29-.1l-5.37 3.38-2.31-.72c-.5-.16-.51-.5.1-.73l9.02-3.48c.42-.16.79.1.65.7z"/></svg>
                </Link>
                <Link href={project.github} target="_blank" className="hover:text-teal-300 transition-colors" aria-label="GitHub">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                </Link>
              </div>
            </div>
          ))}
        </section>
        <Link href="/" className="mt-8 underline">Back to Home</Link>
      </main>
    </div>
  );
} 