'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Logo from '../../app/assets/Logo.webp';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '#services' },
    { name: 'Courses', href: '#courses' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-red-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image src={Logo} alt="Branch Out Consultancy" width={50} height={50} />
            <div className="hidden sm:block">
              <span className={`font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}>
                Taplow 
              </span>
              <div className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-red-600' : 'text-red-400'
              }`}>
                United
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-black hover:bg-red-50 hover:text-red-600' 
                    : 'text-white hover:bg-white/10 hover:text-red-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

  
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all cursor-pointer duration-300 ${
              isScrolled 
                ? 'text-black hover:bg-red-50' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} className='cursor-pointer' /> : <Menu size={24} className='cursor-pointer'  />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-red-100 backdrop-blur-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-black font-semibold hover:bg-red-50 hover:text-red-600 rounded-lg transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-red-100">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}