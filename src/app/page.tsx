"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import SidebarNav from "./components/SidebarNav";
import GlassCard from "./components/ui/GlassCard";
import { projects, futureProjects, impactProducts, interviews, backers } from "@/data/content";
import { ArrowRight, ExternalLink, Play, Mic, FileText, Github, Twitter, Send, Camera, Brain, Box, Coins, ShieldCheck, BarChart3, Globe, Trophy, FlaskConical, RefreshCw, Hammer, CheckCircle2, Loader2, PlayCircle } from "lucide-react";

// Lazy load the heavy 3D scene
const TropicalScene = dynamic(() => import("./components/TropicalScene"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 bg-[#0f172a]" />, // Minimal placeholder
});

const FundingLive = () => (
  <motion.span
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    className="ml-2 sm:ml-4 px-3 sm:px-4 py-1 rounded-full bg-teal-500/20 text-teal-300 font-bold border border-teal-500/50 shadow-[0_0_15px_rgba(20,184,166,0.5)] flex items-center gap-2 text-xs sm:text-sm backdrop-blur-sm"
  >
    <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-red-500"></span>
    </span>
    Funding Live
  </motion.span>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 100 },
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen text-foreground font-sans selection:bg-teal-500/30">
      <SidebarNav />

      <main className="relative flex-1 flex flex-col items-center px-4 py-12 md:ml-24 lg:ml-32 transition-all duration-500 z-10">
        <TropicalScene />

        {/* Hero Section */}
        <motion.header
          id="home"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-5xl flex flex-col items-center text-center mb-24 mt-12"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-teal-400 text-sm md:text-base font-bold tracking-[0.2em] uppercase bg-teal-950/30 border border-teal-500/20 px-4 py-2 rounded-full backdrop-blur-sm">
              The dMRV Infrastructure for the Regenerative Economy
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white via-teal-100 to-teal-400 bg-clip-text text-transparent drop-shadow-lg max-w-4xl mx-auto leading-[1.1]">
            Turn Real-World Impact into <span className="text-teal-400">Digital Assets</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-10 font-light mx-auto">
            EcoSynthesisX DAO builds the blockchain and AI tools that verify, measure, and report real-world actions. We empower non-profits to prove their work, tokenize their impact, and unlock global funding.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
            <Link
              href="https://regenbazaar.com/form"
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold text-lg rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_40px_rgba(20,184,166,0.5)] flex items-center justify-center gap-2"
            >
              Verify Your Impact <ShieldCheck size={20} />
            </Link>
            <Link
              href="https://juicebox.money/v4/eth:76"
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-teal-500/50 hover:border-teal-400 hover:bg-teal-500/10 text-teal-300 font-bold text-lg rounded-full transition-all flex items-center justify-center gap-2"
            >
              Support the DAO Infrastructure <Box size={20} />
            </Link>
          </motion.div>
        </motion.header>

        {/* Truth Pipeline Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-6xl mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-200 to-white bg-clip-text text-transparent">From Ground Action to On-Chain Proof</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Our rigorous process transforms physical work into tradeable, trusted digital assets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500/0 via-teal-500/30 to-teal-500/0 -z-10" />

            {[
              { icon: <Camera size={32} />, title: "Data Capture", desc: "Partners collect real-world data via drones, cameras, and IoT." },
              { icon: <Brain size={32} />, title: "AI Verification", desc: "Our AI engines analyze, validate, and verify the submitted evidence." },
              { icon: <Box size={32} />, title: "Blockchain Record", desc: "Immutable proof is minted on-chain as a permanent record." },
              { icon: <Coins size={32} />, title: "Liquid Asset", desc: "Impact becomes a tradeable digital asset (NFTs/Tokens)." }
            ].map((step, idx) => (
              <GlassCard key={idx} className="flex flex-col items-center text-center p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-24 h-24 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-6 text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.1)]">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-teal-100 mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-colors" />
              </GlassCard>
            ))}
          </div>
        </motion.section>

        {/* Audience Segmentation Section */}
        <section id="enterprise" className="w-full max-w-6xl mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* For Corporates */}
            <GlassCard className="p-8 md:p-12 border-l-4 border-l-teal-500/50 flex flex-col justify-center">
              <div className="mb-6 flex items-center gap-3 text-teal-400">
                <ShieldCheck size={28} />
                <span className="font-bold tracking-wider text-sm uppercase">For Funds & Corporates</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Eliminate Greenwashing.</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Secure your ESG portfolio with audit-grade data. We provide the dMRV layer that ensures your investments are backed by empirical reality—not just PDF reports. Minimize risk and automate compliance with on-chain verification.
              </p>
              <Link href="#contact" className="inline-flex items-center text-teal-300 font-bold hover:text-teal-200 transition-colors gap-2">
                Explore Enterprise Solutions <ArrowRight size={18} />
              </Link>
            </GlassCard>

            {/* For Non-Profits */}
            <GlassCard className="p-8 md:p-12 border-r-4 border-r-blue-500/50 flex flex-col justify-center">
              <div className="mb-6 flex items-center gap-3 text-blue-400">
                <Globe size={28} />
                <span className="font-bold tracking-wider text-sm uppercase">For Non-Profits</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Technology that Funds Your Mission.</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                You focus on the groundwork; we handle the paperwork. Access enterprise-grade verification tools to prove your impact, mint Impact Certificates, and unlock global Web3 liquidity without technical barriers.
              </p>
              <Link href="https://regenbazaar.com" target="_blank" className="inline-flex items-center text-blue-300 font-bold hover:text-blue-200 transition-colors gap-2">
                Get Verified & Funded <ArrowRight size={18} />
              </Link>
            </GlassCard>
          </div>
        </section>

        {/* Juicebox CTA - Governance */}
        <motion.section
          id="governance"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl mb-24"
        >
          <div className="relative group p-1 rounded-3xl bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
            <div className="relative bg-[#0f172a] rounded-[22px] overflow-hidden">
              <div className="relative p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Shape a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Better World</span>
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                  Contribute ETH to get <b>$ESX tokens</b> – your key to governance, voting, and future perks.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                  <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <h4 className="text-teal-300 font-bold text-lg mb-1">Decentralized Governance</h4>
                    <p className="text-sm text-gray-400">Vote on future developments</p>
                  </div>
                  <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <h4 className="text-teal-300 font-bold text-lg mb-1">Exchangeable Utility</h4>
                    <p className="text-sm text-gray-400">Support nonprofits & cleanups</p>
                  </div>
                </div>

                <Link
                  href="https://juicebox.money/v4/eth:76"
                  target="_blank"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold text-lg rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_40px_rgba(20,184,166,0.5)]"
                >
                  Become a Stakeholder <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section - Bento Grid */}
        <section id="projects-in-development" className="w-full max-w-6xl mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-teal-500/50" />
            Projects In Development
            <span className="w-12 h-[1px] bg-teal-500/50" />
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <GlassCard key={idx} className="flex flex-col h-full hover:border-teal-500/30 transition-colors group relative overflow-hidden">
                {/* Status Badge */}
                {project.status && (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${project.statusColor === 'green'
                    ? 'bg-green-500/20 text-green-300 border-green-500/30 shadow-[0_0_10px_rgba(34,197,94,0.2)]'
                    : 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30 shadow-[0_0_10px_rgba(234,179,8,0.2)]'
                    }`}>
                    {project.statusColor === 'green' ? '🚀' : '🚧'} {project.status}
                  </div>
                )}

                <div className="flex items-start justify-between mb-2 mt-8">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white/10 p-1 border border-white/10 shrink-0">
                      <Image src={project.logo} alt={project.name} width={64} height={64} className="object-cover w-full h-full rounded-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold group-hover:text-teal-300 transition-colors mb-1">{project.name}</h3>
                      {project.subtitle && <p className="text-sm text-teal-400 font-medium tracking-wide uppercase">{project.subtitle}</p>}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mb-6 ml-[5.5rem]">
                  {project.links.website && (
                    <Link href={project.links.website} target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-teal-500/20 text-gray-400 hover:text-teal-300 transition-colors">
                      <ExternalLink size={16} />
                    </Link>
                  )}
                  {project.links.twitter && (
                    <Link href={project.links.twitter} target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-teal-500/20 text-gray-400 hover:text-teal-300 transition-colors">
                      <Twitter size={16} />
                    </Link>
                  )}
                  {project.links.github && (
                    <Link href={project.links.github} target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                      <Github size={16} />
                    </Link>
                  )}
                </div>

                <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {project.preview && (
                  <div className="relative w-full h-48 rounded-xl overflow-hidden mt-auto">
                    <Image src={project.preview} alt={`${project.name} interface preview`} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Innovation Roadmap */}
        <section id="roadmap" className="w-full max-w-6xl mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Innovation Roadmap</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Designing the reputation and economic utility layers for the regenerative web.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureProjects.map((project, idx) => (
              <GlassCard key={idx} hoverEffect={true} className="relative overflow-hidden group border border-teal-500/10 hover:border-teal-500/30">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Status Badge */}
                {project.status && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md bg-purple-500/10 text-purple-300 border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)] z-10 flex items-center gap-2">
                    <FlaskConical size={14} className="stroke-2" /> {project.status}
                  </div>
                )}

                <div className="flex flex-col h-full relative z-10 p-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-teal-200">
                      {project.icon === 'trophy' ? <Trophy size={24} /> : <RefreshCw size={24} />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-teal-100 mb-1">{project.name}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {project.links.website && (
                    <Link href={project.links.website} target="_blank" className="text-xs font-bold uppercase tracking-wider text-purple-400 hover:text-purple-300 flex items-center gap-2 mt-auto">
                      {project.buttonText || "Read Litepaper"} <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Impact Products (Partners) */}
        <section id="impact-products" className="w-full max-w-5xl mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted Partners & Case Studies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Real-world impact from beach to jungle, verified and tokenized by EcoSynthesisX.</p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {impactProducts.map((product, idx) => (
              <GlassCard key={idx} className="relative overflow-hidden p-8 md:p-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                {/* Status Badge */}
                <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md flex items-center gap-2 ${product.statusColor === 'green'
                  ? 'bg-green-500/20 text-green-300 border-green-500/30'
                  : 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30'
                  }`}>
                  {product.statusColor === 'green' ? <CheckCircle2 size={14} /> : <Loader2 size={14} className="animate-spin" />} {product.status}
                </div>

                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <div className="shrink-0 flex flex-col items-center md:items-start gap-4">
                    {/* Logo - Transparent Container */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden p-2 flex items-center justify-center">
                      <Image
                        src={product.logo}
                        alt={product.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                      />
                    </div>
                  </div>

                  <div className="flex-grow w-full text-center md:text-left">
                    {/* Tag */}
                    <div className="mb-2">
                      {product.tags && product.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-bold tracking-wider text-teal-400 uppercase bg-teal-950/40 px-2 py-1 rounded-md border border-teal-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-3xl font-bold mb-4 text-white">{product.name}</h3>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">{product.description}</p>

                    {/* Key Stats - Large Numbers */}
                    {product.stats && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 border-t border-white/5 pt-6">
                        {product.stats.map((stat, i) => (
                          <div key={i} className="text-center md:text-left">
                            <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white mb-1">
                              {stat.value}
                            </div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      {product.links.website && (
                        <Link
                          href={product.links.website}
                          target="_blank"
                          className="px-6 py-3 bg-white/5 hover:bg-teal-500/20 text-white font-bold rounded-lg transition-all border border-white/10 hover:border-teal-500/50 flex items-center gap-2 group"
                        >
                          {product.buttonText || "Visit Website"} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Insights & Presentations */}
        <section id="blog" className="w-full max-w-6xl mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Insights & Presentations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interviews.map((item, idx) => (
              <GlassCard
                key={idx}
                className={`flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 p-0 overflow-hidden ${item.highlight ? 'border-teal-500/50 shadow-[0_0_30px_rgba(20,184,166,0.1)]' : ''}`}
              >
                {/* Thumbnail */}
                <div className="relative h-48 w-full bg-gray-900 group">
                  {item.thumbnail ? (
                    <Image src={item.thumbnail} alt={item.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-slate-900" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform text-white border border-white/20">
                      {item.icon === 'play' && <PlayCircle size={32} className="fill-white/10" />}
                      {item.icon === 'mic' && <Mic size={24} />}
                      {item.icon === 'file' && <FileText size={24} />}
                    </div>
                  </div>
                  {item.label && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md text-xs font-bold text-teal-300 rounded-full border border-teal-500/20">
                      {item.label}
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 text-teal-50 leading-tight">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">{item.description}</p>

                  <Link href={item.url} target="_blank" className="text-xs font-bold uppercase tracking-wider text-teal-400 hover:text-teal-300 flex items-center gap-2 mt-auto">
                    {item.type === 'video' ? 'Watch Presentation' : item.type === 'podcast' ? 'Listen Episode' : 'Read Article'} <ArrowRight size={14} />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Backers */}
        <section id="backers" className="w-full max-w-6xl mb-24">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-500 uppercase tracking-widest text-sm">Our Backers</h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {backers.map((backer) => (
              <Link key={backer.name} href={backer.url} target="_blank" className="hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 relative bg-white/5 rounded-full p-3 flex items-center justify-center border border-white/5 hover:border-teal-500/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                  <Image src={backer.logo} alt={backer.name} width={40} height={40} className="object-contain" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full text-center py-8 text-sm text-gray-500 border-t border-white/5">
          <p>&copy; 2026 EcoSynthesisX DAO. Open Source & Decentralized.</p>
        </footer>
      </main>
    </div>
  );
}
