"use client";
import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "SERVICES LIST", href: "/services-list" },
  { name: "SPECIALS", href: "/specials" },
  { name: "BLOG", href: "/blog" }, // Added Blog link
];

const moreLinks = [
  { name: "TESTIMONIALS", href: "/testimonials", bold: true },
  { name: "CONTACT US", href: "/contact" },
  { name: "NO CALL / NO SHOW POLICY", href: "/no-call-no-show-policy" },
];

export default function Navbar({ sticky = true }: { sticky?: boolean }) {
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent body scroll when sidebar is open
  if (typeof window !== "undefined") {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }

  return (
    <header className={`${sticky ? "sticky top-0" : ""} w-full bg-white/90 shadow-md z-20 relative transition-all duration-300`}> 
      {/* Mobile: Phone number bar */}
      <div className="block md:hidden w-full bg-[#fbb6c1] text-center py-2 font-bold text-lg tracking-wide text-black">
        <a href="tel:6716477546" className="hover:text-[#a9445b] transition-colors">(671) 647-7546</a>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-6 md:py-8 w-full">
        {/* Mobile Topbar */}
        <div className="flex flex-row w-full md:w-auto items-center justify-between md:justify-start">
          <button className="md:hidden text-2xl text-[#a9445b] mr-2" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <FaBars />
          </button>
          <span className="text-2xl font-bold tracking-wide text-[#a9445b] leading-tight text-center flex-1 md:hidden">DERMAL<br/>SKIN CLINIC<br/>AND SPA GUAM</span>
          {/* Desktop logo */}
          <span className="hidden md:block text-2xl font-bold tracking-wide text-[#a9445b] leading-tight whitespace-pre-line">DERMAL<br/>SKIN CLINIC<br/>AND SPA GUAM</span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center mt-4 md:mt-0">
          <ul className="flex gap-6 md:gap-8 text-base font-semibold text-[#222] items-center">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <Link href={link.href} className="pb-1 hover:text-black transition-colors border-b-2 border-transparent hover:border-black focus:border-black">
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="relative">
              <button
                className="flex items-center gap-1 pb-1 font-semibold hover:text-black border-b-2 border-transparent hover:border-black focus:border-black uppercase"
                onClick={() => setMoreOpen((v) => !v)}
                onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
                aria-haspopup="true"
                aria-expanded={moreOpen}
              >
                MORE <span className={moreOpen ? "rotate-180" : ""}>▾</span>
              </button>
              {moreOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded shadow-lg py-4 px-6 flex flex-col gap-2 z-30 animate-fade-in">
                  {moreLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`py-1 px-0 text-sm hover:text-[#a9445b] transition font-${item.bold ? "bold" : "normal"} uppercase`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex items-center gap-4 text-base font-semibold text-[#222] ml-4">
          <a href="tel:6716477546" className="hover:text-[#a9445b] transition-colors">(671) 647-7546</a>
          <span className="mx-2">|</span>
          <span className="cursor-pointer"><FaShoppingCart size={22} /></span>
          <span className="cursor-pointer"><FaUser size={22} /></span>
        </div>
      </div>
      {/* Mobile Sidebar Drawer */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-25 z-40" onClick={() => setMobileOpen(false)}></div>
          <aside className="fixed top-0 left-0 h-full w-72 max-w-[90vw] bg-white z-50 shadow-lg flex flex-col animate-slide-in">
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
              <span className="text-xl font-bold tracking-wide text-[#a9445b] leading-tight">DERMAL<br/>SKIN CLINIC<br/>AND SPA GUAM</span>
              <button className="text-2xl text-[#a9445b]" onClick={() => setMobileOpen(false)} aria-label="Close menu"><FaTimes /></button>
            </div>
            <ul className="flex flex-col gap-2 py-4 px-6 text-base font-semibold text-[#222]">
              {navLinks.map((link) => (
                <li key={link.name} className="relative">
                  <Link href={link.href} className="block py-2 border-b border-gray-100 hover:text-black" onClick={() => setMobileOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="relative">
                <details>
                  <summary className="flex items-center gap-1 py-2 font-semibold uppercase cursor-pointer select-none">MORE <span>▾</span></summary>
                  <div className="flex flex-col gap-1 pl-4 mt-1">
                    {moreLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`py-1 px-0 text-sm hover:text-[#a9445b] transition font-${item.bold ? "bold" : "normal"} uppercase`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </details>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <span className="cursor-pointer"><FaShoppingCart size={22} /></span>
                <span className="cursor-pointer"><FaUser size={22} /></span>
              </li>
            </ul>
          </aside>
        </>
      )}
    </header>
  );
}


