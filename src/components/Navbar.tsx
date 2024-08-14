// src/components/Navbar.tsx
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import logo from '../../public/assets/images/logo.png';
import { debounce } from 'lodash';

interface NavbarProps {
  alwaysBlue?: boolean;
  isStatic?: boolean;
  hasHero?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ alwaysBlue = false, isStatic = false, hasHero = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(isStatic || alwaysBlue ? 'bg-blue-700' : 'bg-transparent');
  const [navShadow, setNavShadow] = useState('');

  const handleScroll = useMemo(
    () =>
      debounce(() => {
        if (window.scrollY > window.innerHeight * 0.8) {
          setNavBackground('bg-blue-700');
          setNavShadow('navbar-shadow');
        } else if (hasHero) {
          setNavBackground('bg-transparent');
          setNavShadow('');
        }
      }, 100),
    [hasHero]
  );

  useEffect(() => {
    if (!alwaysBlue && !isStatic) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setNavBackground('bg-blue-700');
    }
  }, [alwaysBlue, isStatic, handleScroll]);

  return (
    <nav className={`fixed top-0 w-full z-20 transition-colors duration-500 ${navBackground} ${navShadow}`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" legacyBehavior>
              <a className="flex items-center">
                <Image className="h-10 w-auto" src={logo} alt="IT Jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">IT Jobs</span>
              </a>
            </Link>
            <div className="hidden md:flex space-x-4 items-center pb-2">
              <Link href="/" legacyBehavior>
                <a className="nav-link text-white hover:text-gray-300 rounded-md px-3 py-2">Home</a>
              </Link>
              <Link href="/jobs" legacyBehavior>
                <a className="nav-link text-white hover:text-gray-300 rounded-md px-3 py-2">Jobs</a>
              </Link>
              <Link href="/AddJobPage" legacyBehavior>
                <a className="nav-link text-white hover:text-gray-300 rounded-md px-3 py-2">Add Job</a>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4 pb-2">
            <div className="hidden md:flex md:space-x-4 items-center">
              <Link href="/login" legacyBehavior>
                <a className="nav-link text-white bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-2">Login</a>
              </Link>
              <Link href="/signup" legacyBehavior>
                <a className="nav-link text-white bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-2">Sign Up</a>
              </Link>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden nav-icon text-white text-2xl">
              {isOpen ? <IoClose /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 mobile-menu ${isOpen ? 'open' : 'closed'}`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute top-0 left-0 w-3/4 h-full bg-blue-700 p-6 z-40">
          <div className="flex flex-col space-y-4">
            <Link href="/" legacyBehavior>
              <a className="nav-link text-white hover:text-gray-300 rounded-md px-3 py-2" onClick={() => setIsOpen(false)}>Home</a>
            </Link>
            <Link href="/jobs" legacyBehavior>
              <a className="nav-link text-white hover:text-gray-300 rounded-md px-3 py-2" onClick={() => setIsOpen(false)}>Jobs</a>
            </Link>
            <Link href="/AddJobPage" legacyBehavior>
              <a className="nav-link text-white hover:text-gray-300 rounded-md px-3 py-2" onClick={() => setIsOpen(false)}>Add Job</a>
            </Link>
            <Link href="/login" legacyBehavior>
              <a className="nav-link text-white bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-2" onClick={() => setIsOpen(false)}>Login</a>
            </Link>
            <Link href="/signup" legacyBehavior>
              <a className="nav-link text-white bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-2" onClick={() => setIsOpen(false)}>Sign Up</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
