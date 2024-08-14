// src/pages/index.tsx
import React from 'react';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import Layout from '../components/Layout';
import { Job } from '../types/types';
import Link from 'next/link';

// Fetching jobs data from the server-side
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/jobs');
  const { data } = await res.json();
  return { props: { jobs: data } };
}

interface HomePageProps {
  jobs: Job[];
}

const HomePage: React.FC<HomePageProps> = ({ jobs }) => {
  return (
    <Layout>
      <Hero />
      <div className="main-content">
        <HomeCards />
        <JobListings jobs={jobs} limit={3} />
        <div className="text-center mt-8">
          <Link href="/jobs" legacyBehavior>
            <a className="inline-block bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition duration-300">
              View All Jobs
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
