"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <div
        className="flex items-center justify-between px-6 py-3 rounded-2xl 
                      bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
      >
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          CareHive
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`text-white transition-colors relative 
                             after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white
                             after:left-0 after:-bottom-1 after:transition-all after:duration-300
                             hover:after:w-full ${
                               isActive
                                 ? "font-semibold opacity-100"
                                 : "opacity-80 hover:opacity-100"
                             }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col mt-2 space-y-2 rounded-xl 
                       bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-4 md:hidden"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`block text-white transition-colors ${
                      isActive
                        ? "font-semibold opacity-100"
                        : "opacity-80 hover:opacity-100"
                    }`}
                    onClick={() => setOpen(false)} // close menu after click
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
