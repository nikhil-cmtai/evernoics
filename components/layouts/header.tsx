'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/how-it-works', label: 'How it Works' },
  { href: '/features', label: 'Features' },
  { href: '/contact', label: 'Contact Us' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-full bg-white shadow z-20 relative"
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-2 relative">
        <Link href="/">
          <Image src="/logo.png" alt="Location Track Logo" width={180} height={60} priority />
        </Link>
        {/* Right side nav and login */}
        <div className="ml-auto flex items-center">
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-[var(--color-primary)] font-semibold items-center">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-1 py-0.5 transition hover:text-[var(--color-accent)] hover:underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* User Login always visible */}
          <a
            href="/login"
            className="ml-3 rounded-full px-4 py-1.5 bg-[var(--color-primary)] text-white font-semibold border border-[var(--color-primary)] hover:bg-white hover:text-[var(--color-primary)] hover:border-[var(--color-accent)] transition z-30"
          >
            User Login
          </a>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] z-30"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-2xl z-20 flex flex-col gap-8 pt-24 px-8 md:hidden"
            >
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition py-2 border-b border-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        {/* Overlay when menu is open */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-10 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </motion.header>
  );
};

export default Header;
