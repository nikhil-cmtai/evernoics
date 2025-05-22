'use client'

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  { href: 'https://www.facebook.com/locationtrack.in/', icon: <FaFacebookF />, label: 'Facebook' },
  { href: 'https://www.instagram.com/locationtrack.in/', icon: <FaInstagram />, label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/locationtrack/', icon: <FaLinkedinIn />, label: 'LinkedIn' },
];

const Topbar = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2, ease: 'easeOut' }}
    className="w-full bg-[var(--color-primary)] text-white text-xs md:text-sm shadow z-30"
  >
    <div className="container mx-auto flex justify-between items-center px-4 py-1 min-h-8">
      <div className="flex gap-2 items-center flex-wrap">
        <span className="hidden sm:inline">info@everonics.in</span>
        <span className="hidden sm:inline">,</span>
        <span className="hidden sm:inline">locationtracker21@gmail.com</span>
        <span className="hidden sm:inline">|</span>
        <span>+91 9984024365</span>
        <span>,</span>
        <span>+91 8948168024</span>
      </div>
      <div className="flex gap-2">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="hover:text-[var(--color-accent)] transition text-base md:text-lg"
            target="_blank" rel="noopener noreferrer"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Topbar;
