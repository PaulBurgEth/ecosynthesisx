import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#232946] via-[#16161a] to-[#0f0f10] text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-lg text-white/80">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="px-6 py-2 bg-teal-500 text-black rounded-full font-bold shadow hover:bg-teal-400 transition-colors">Go Home</Link>
    </div>
  );
} 