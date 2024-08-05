import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import JobListings from '../components/JobListings';
import JobFilter from '../components/JobFilter';
import Footer from '../components/Footer';
import { Job } from '../types/types';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/jobs');
  const { data } = await res.json();
  return { props: { jobs: data } };
}

interface JobsPageProps {
  jobs: Job[];
}

const JobsPage: React.FC<JobsPageProps> = ({ jobs }) => {
  const [page, setPage] = useState(1);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);

  const handleLoadMore = () => setPage(page + 1);

  const handleFilterChange = (filters: { type: string; location: string; salary: string }) => {
    let filtered = jobs;

    if (filters.type) {
      filtered = filtered.filter(job => job.type === filters.type);
    }

    if (filters.location) {
      filtered = filtered.filter(job => job.location.toLowerCase().includes(filters.location.toLowerCase()));
    }

    if (filters.salary) {
      filtered = filtered.filter(job => job.salary.toLowerCase().includes(filters.salary.toLowerCase()));
    }

    setFilteredJobs(filtered);
  };

  return (
    <>
      <Navbar alwaysBlue />
      <section className="bg-blue-50 px-4 py-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">All Jobs</h1>
          <JobFilter onFilterChange={handleFilterChange} />
          <JobListings jobs={filteredJobs} limit={6 * page} isHomePage={false} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default JobsPage;
