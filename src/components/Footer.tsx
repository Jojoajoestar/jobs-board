/**
 * Footer Component
 *
 * This component renders the footer section of the website, including links and the logo.
 *
 * Props: None
 *
 * Example:
 * <Footer />
 */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/images/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-blue-700 text-white">
      <div className="footer-container container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="footer-logo flex items-center mb-4 md:mb-0">
          <Image className="h-8 w-auto" src={logo} alt="IT Jobs" priority />
          <span className="text-xl font-bold ml-2">IT Jobs</span>
        </div>
        <div className="footer-center order-last md:order-none mt-2 md:mt-0 flex-grow flex justify-center">
          <p className="text-xs text-center">&copy; {new Date().getFullYear()} IT Jobs. All rights reserved.</p>
        </div>
        <nav className="footer-links flex flex-col md:flex-row gap-4 text-xs text-center md:text-left md:items-center" aria-label="Footer navigation">
          <div className="flex flex-col gap-1">
            <Link href="/contact" legacyBehavior>
              <a className="hover:underline">Contact Us</a>
            </Link>
            <Link href="/guidelines" legacyBehavior>
              <a className="hover:underline">Guidelines</a>
            </Link>
            <Link href="/terms" legacyBehavior>
              <a className="hover:underline">Terms of Use</a>
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <Link href="/privacy" legacyBehavior>
              <a className="hover:underline">Privacy & Ad Choices</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="hover:underline">Work With Us</a>
            </Link>
            <Link href="/advertisers" legacyBehavior>
              <a className="hover:underline">Advertisers</a>
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
