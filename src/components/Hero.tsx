/**
 * Hero Component
 *
 * This component renders the hero section of the home page, including the title, subtitle, and a call-to-action button.
 *
 * Props:
 * - title: string (optional) - The title to be displayed in the hero section.
 * - subtitle: string (optional) - The subtitle to be displayed in the hero section.
 *
 * Example:
 * <Hero title="Welcome to IT Jobs" subtitle="Find the best IT jobs here" />
 */

import React from 'react';
import Navbar from './Navbar';

interface HeroProps {
  title?: string; // Optional title to be displayed
  subtitle?: string; // Optional subtitle to be displayed
}

const Hero: React.FC<HeroProps> = ({
  title = 'Find Your IT Support Job',
  subtitle = 'Connecting small businesses with skilled IT professionals',
}) => {
  return (
    <section className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url('/assets/images/JobBoardHero.jpg')`, backgroundPosition: 'center right' }}>
      <Navbar />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <div className="relative z-10 flex flex-col items-center text-center text-white mt-24">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">{title}</h1>
        <p className="my-4 text-xl">{subtitle}</p>
        <a href="#cta" className="bg-blue-600 text-white rounded-md px-6 py-3 mt-4 hover:bg-blue-700">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
