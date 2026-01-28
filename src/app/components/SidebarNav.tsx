"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import { Home, Building2, LayoutGrid, Map, Scale, BookOpen } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#enterprise", label: "For Enterprise", icon: Building2 },
  { href: "#projects-in-development", label: "Projects", icon: LayoutGrid },
  { href: "#roadmap", label: "Innovation Roadmap", icon: Map },
  { href: "#governance", label: "Governance", icon: Scale },
  { href: "#blog", label: "Blog", icon: BookOpen },
];

const logoUrl = "https://avatars.githubusercontent.com/u/145981044?s=200&v=4";

export default function SidebarNav() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [hasAutoCollapsed, setHasAutoCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-collapse after 2 seconds (only on desktop)
  useEffect(() => {
    if (!isMobile) {
      const timer = setTimeout(() => {
        setIsExpanded(false);
        setHasAutoCollapsed(true);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      // On mobile, start collapsed
      setIsExpanded(false);
      setHasAutoCollapsed(true);
    }
  }, [isMobile]);

  const handleMouseEnter = () => {
    if (hasAutoCollapsed && !isMobile) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (hasAutoCollapsed && !isMobile) {
      setIsExpanded(false);
    }
  };

  const handleClick = () => {
    if (hasAutoCollapsed) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleLinkClick = () => {
    // Close sidebar on mobile when link is clicked
    if (isMobile && isExpanded) {
      setIsExpanded(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isExpanded && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}

      <nav
        className={`fixed top-0 left-0 h-full bg-white/30 dark:bg-black/30 shadow-lg flex flex-col items-center py-4 md:py-10 z-20 transition-all duration-500 ease-in-out ${isExpanded ? 'w-48 md:w-48' : 'w-16 md:w-16'
          } ${isMobile && !isExpanded ? 'w-12' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Burger Menu Icon (visible when collapsed) */}
        {!isExpanded && (
          <button
            onClick={handleClick}
            className="mb-2 md:mb-4 p-2 hover:bg-teal-400/20 rounded-lg transition-colors duration-200 touch-manipulation"
            aria-label="Toggle navigation menu"
          >
            <svg
              width={isMobile ? "20" : "24"}
              height={isMobile ? "20" : "24"}
              fill="currentColor"
              viewBox="0 0 24 24"
              className="text-teal-400"
            >
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}

        {/* Close button for mobile when expanded */}
        {isMobile && isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="self-end mb-4 p-2 hover:bg-teal-400/20 rounded-lg transition-colors duration-200"
            aria-label="Close navigation menu"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="text-teal-400"
            >
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}

        {/* Logo */}
        <div className={`transition-all duration-500 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-75 h-0 overflow-hidden'}`}>
          <Image
            src={logoUrl}
            alt="EcoSynthesisX Logo"
            width={isMobile ? 48 : 64}
            height={isMobile ? 48 : 64}
            className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} rounded-full mb-2 md:mb-4 border-2 border-teal-400 shadow`}
          />
        </div>

        {/* Social Links */}
        <div className={`flex gap-2 md:gap-4 mb-4 md:mb-6 transition-all duration-500 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-75 h-0 overflow-hidden'
          }`}>
          <Link href="https://x.com/EcoSynthesisX" target="_blank" className="hover:text-teal-300 transition-colors touch-manipulation" aria-label="X">
            <svg width={isMobile ? "20" : "24"} height={isMobile ? "20" : "24"} fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </Link>
          <Link href="https://t.me/EcoSynthesisX" target="_blank" className="hover:text-teal-300 transition-colors touch-manipulation" aria-label="Telegram">
            <svg width={isMobile ? "20" : "24"} height={isMobile ? "20" : "24"} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4.93 7.36l-1.43 6.77c-.11.48-.39.6-.78.37l-2.16-1.59-1.04 1c-.12.12-.23.23-.47.23l.17-2.38 4.34-3.92c.19-.17-.04-.27-.29-.1l-5.37 3.38-2.31-.72c-.5-.16-.51-.5.1-.73l9.02-3.48c.42-.16.79.1.65.7z" /></svg>
          </Link>
          <Link href="https://discord.gg/ecosynthesisx" target="_blank" className="hover:text-teal-300 transition-colors touch-manipulation" aria-label="Discord">
            <svg width={isMobile ? "20" : "24"} height={isMobile ? "20" : "24"} fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" /></svg>
          </Link>
        </div>

        {/* Title */}
        <div className={`transition-all duration-500 ${isExpanded ? 'opacity-100 scale-100 mb-4 md:mb-8' : 'opacity-0 scale-75 h-0 overflow-hidden mb-0'
          }`}>
          <h3 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold text-teal-400 animate-pulse text-center px-2`} style={{
            textShadow: '0 0 10px rgba(45, 212, 191, 0.5), 0 0 20px rgba(45, 212, 191, 0.3), 0 0 30px rgba(45, 212, 191, 0.2)'
          }}>EcoSynthesisX</h3>
        </div>

        {/* Navigation Links */}
        <ul className={`flex flex-col gap-3 md:gap-6 w-full items-center transition-all duration-500 overflow-y-auto ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-75 h-0 overflow-hidden'
          }`}>
          {navLinks.map((link) => (
            <li key={link.href} className="w-full">
              <Link
                href={link.href}
                onClick={handleLinkClick}
                className={`flex items-center gap-3 px-2 md:px-4 py-1 md:py-2 rounded ${isExpanded ? 'justify-start' : 'justify-center'} ${isMobile ? 'text-sm' : 'text-lg'} font-mono font-semibold transition-all duration-200 hover:bg-teal-200/60 dark:hover:bg-teal-800/40 hover:scale-105 hover:text-teal-400 focus:text-teal-400 focus:scale-105 relative group touch-manipulation mx-auto max-w-[90%]`}
              >
                <link.icon size={20} strokeWidth={1.5} className="shrink-0" />
                <span className={`inline-block transition-all duration-200 group-hover:underline group-hover:decoration-teal-400 group-hover:decoration-2 ${!isExpanded && !isMobile ? 'hidden' : ''}`}>
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
} 