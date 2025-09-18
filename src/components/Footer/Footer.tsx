'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, Linkedin, Twitter, Facebook } from 'lucide-react';
import Image from 'next/image';
import Logo from '../../app/assets/Logo.webp'; // Replace with your Taplow United logo

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Teams', href: '/teams' },
  { name: 'Fixtures', href: '/fixtures' },
  { name: 'Join Us', href: '/join' },
  { name: 'Contact Us', href: '/contact' },
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-[#242424] text-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(207,20,43,0.3) 1px,transparent 1px),
                             linear-gradient(90deg,rgba(207,20,43,0.3) 1px,transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Logo & Intro */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <Image src={Logo} alt="Taplow United FC" width={50} height={50} />
              <div>
                <span className="font-bold text-xl text-white">Taplow United</span>
                <div className="text-red-400 text-sm font-medium">Football Club</div>
              </div>
            </Link>

            <p className="text-gray-300 leading-relaxed">
              Founded in 1923, Taplow United FC has been at the heart of community football for over a century,
              inspiring generations of players and fans.
            </p>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-6 rounded overflow-hidden shadow-md">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_the_United_Kingdom.svg"
                  alt="UK Flag"
                  width={32}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-gray-400 text-sm">Proudly representing Taplow, UK</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>Stanley Jones Field</div>
                  <div>Taplow, Buckinghamshire</div>
                  <div>United Kingdom</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                <Link href="tel:+441628000000" className="text-gray-300 hover:text-red-400 text-sm">
                  +44 1628 000000
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                <Link href="mailto:info@taplowunitedfc.co.uk" className="text-gray-300 hover:text-red-400 text-sm">
                  info@taplowunitedfc.co.uk
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-red-400 flex-shrink-0" />
                <Link href="https://taplowunitedfc.co.uk" className="text-gray-300 hover:text-red-400 text-sm">
                  taplowunitedfc.co.uk
                </Link>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </Link>
              ))}
            </div>

            <div className="text-gray-400 text-sm">
              <div className="font-semibold mb-2">Clubhouse Hours:</div>
              <div>Mon - Fri: 5:00 PM - 9:00 PM</div>
              <div>Saturday: 9:00 AM - 6:00 PM</div>
              <div>Sunday: Match Days</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 px-6 py-6 text-gray-400 text-sm">
          <div className="text-center flex flex-col items-center space-y-2">
            Taplow United Football Club · Established 1923 · Community Football in Buckinghamshire.
          </div>

          <div className="my-4 border-t border-white/10"></div>

          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div>© 2025 Taplow United FC. All rights reserved.</div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="hover:text-red-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-red-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
