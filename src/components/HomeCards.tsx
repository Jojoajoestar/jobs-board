/**
 * HomeCards Component
 *
 * This component renders a section with two cards, one for IT professionals and one for small businesses.
 *
 * Props: None
 *
 * Example:
 * <HomeCards />
 */

import React from 'react';
import Link from 'next/link';
import Card from './Card';

const HomeCards: React.FC = () => {
  return (
    <section className="py-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 className="text-2xl font-bold">For IT Professionals</h2>
          <p className="mt-2 mb-4">Browse our IT support jobs and start your career today</p>
          <Link href="/jobs" legacyBehavior>
            <a className="inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700">Browse Jobs</a>
          </Link>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold">For Small Businesses</h2>
          <p className="mt-2 mb-4">List your job to find the perfect IT support professional for your business</p>
          <Link href="/AddJobPage" legacyBehavior>
            <a className="inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700">Add Job</a>
          </Link>
        </Card>
      </div>
    </section>
  );
};

export default HomeCards;
