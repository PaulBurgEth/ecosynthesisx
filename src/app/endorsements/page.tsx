import Link from "next/link";
import SidebarNav from "../components/SidebarNav";

export default function EndorsementsPage() {
  return (
    <div className="relative min-h-screen text-white flex flex-row">
      <SidebarNav />
      <main className="flex-1 flex flex-col items-center px-4 py-10 gap-12 ml-48">
        <h1 className="text-4xl font-bold mb-6">Endorsements</h1>
        <section className="w-full max-w-3xl bg-white/80 dark:bg-black/30 rounded-xl shadow p-6 flex flex-col gap-2">
          <h2 className="text-2xl font-semibold mb-2">Supporters & Endorsements</h2>
          <ul className="list-disc list-inside text-base">
            <li>No endorsements yet. Be the first to support us!</li>
          </ul>
        </section>
        <Link href="/" className="mt-8 underline">Back to Home</Link>
      </main>
    </div>
  );
} 