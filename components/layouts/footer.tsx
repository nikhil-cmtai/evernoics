'use client'

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  { href: 'https://www.facebook.com/locationtrack.in/', icon: <FaFacebookF />, label: 'Facebook' },
  { href: 'https://www.instagram.com/locationtrack.in/', icon: <FaInstagram />, label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/locationtrack/', icon: <FaLinkedinIn />, label: 'LinkedIn' },
];

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className="w-full bg-[var(--color-primary)] text-white pt-8 pb-4 mt-10 shadow-inner"
  >
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
      <div className="flex gap-4 mb-4 md:mb-0">
        {socialLinks.map((s) => (
          <motion.a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            whileHover={{ scale: 1.2, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl hover:text-[var(--color-accent)] transition"
            target="_blank" rel="noopener noreferrer"
          >
            {s.icon}
          </motion.a>
        ))}
      </div>
      <div className="flex flex-col gap-1 text-sm md:text-base font-semibold text-white/90 items-center md:items-end">
        <div>
          <span className="font-bold">Email:</span> info@everonics.in
        </div>
        <div>
          <span className="font-bold">Contact:</span> +91 9984024365
        </div>
      </div>
      <div className="flex gap-6 font-semibold">
        <a href="/terms" className="hover:text-[var(--color-accent)] transition">Terms</a>
        <a href="/privacy-policy" className="hover:text-[var(--color-accent)] transition">Privacy Policy</a>
      </div>
    </div>
    <div className="container mx-auto mt-6 border-t border-white/30 pt-3 px-4">
      <div className="text-sm md:text-base text-center font-bold tracking-wide opacity-90">
        &copy; {new Date().getFullYear()} Location Tracker. Designed by CMT AI.
      </div>
    </div>
  </motion.footer>
);

export default Footer;
