'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from '../../app/assets/Logo.webp';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Teams', href: '#teams' },
    { name: 'Fixtures', href: '#fixtures' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="absolute top-4 w-full flex justify-center z-50"
    >
      {/* Navbar container with responsive padding */}
      <div className="relative w-full max-w-7xl px-4 sm:px-6 md:px-8 mx-auto">
        <div className="flex items-center justify-between px-4 py-3 rounded-2xl border border-white/20 backdrop-blur-xl bg-[#8E0007]/80 shadow-lg">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:scale-101 transition-all duration-300"
          >
            <Image src={Logo} alt="Taplow United FC" width={50} height={50} />
            <span className="text-sm sm:text-xl font-bold text-white uppercase">
              Taplow United FC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 ml-auto">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.1 }}>
                <Link
                  href={item.href}
                  className="text-white font-semibold uppercase hover:text-red-200 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* Join Us Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#join"
                className="flex items-center bg-[#F4FF54] text-black px-5 py-2 rounded-full font-medium shadow-md transition-all duration-200"
              >
                Join Us
                <span className="bg-black rounded-full ml-2 flex items-center justify-center p-1">
                  <ArrowUpRight size={15} color="white" />
                </span>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden ml-auto text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] md:w-[80%] px-4 bg-white/20 backdrop-blur-xl shadow-lg rounded-xl py-4 flex flex-col items-center space-y-4 border border-white/20 mt-2 z-50"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white font-medium hover:text-red-600 w-full text-center py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Join Us Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6"
              >
                <Link
                  href="#join"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex justify-center items-center w-full bg-[#F4FF54] text-black px-5 py-2 rounded-full font-medium shadow-md transition-all duration-200"
                >
                  Join Us
                  <span className="bg-black rounded-full ml-2 flex items-center justify-center p-1">
                    <ArrowUpRight size={15} color="white" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
