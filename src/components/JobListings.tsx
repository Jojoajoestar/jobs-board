import React, { useState } from 'react';
import Link from 'next/link';
import { Job } from '../types/types';

interface JobListingsProps {
  jobs: Job[];
  limit?: number;
  isHomePage?: boolean;
}

const JobListings: React.FC<JobListingsProps> = ({ jobs, limit = 6, isHomePage = true }) => {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  const toggleExpand = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const displayedJobs = showMore ? jobs : jobs.slice(0, limit);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        {isHomePage && <h2 className="text-3xl font-bold text-center mb-6">Recent Jobs</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <h2 className="text-xl font-bold mb-2">{job.title}</h2>
              <p className="text-gray-700 mb-2">{job.company.name}</p>
              <p className="text-gray-700 mb-2">{job.location}</p>
              <p className="text-gray-700 mb-2">{job.salary}</p>
              <p className="text-gray-700 mb-2">
                {expandedJobId === job.id ? job.description : `${job.description.slice(0, 100)}...`}
              </p>
              <button onClick={() => toggleExpand(job.id)} className="text-blue-600 hover:underline">
                {expandedJobId === job.id ? 'Read Less' : 'Read More'}
              </button>
              <div className="mt-4 flex space-x-2">
                <Link href={`/job/${job.id}`} legacyBehavior>
                  <a className="inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700">
                    More Info
                  </a>
                </Link>
                <Link href={`/apply/${job.id}`} legacyBehavior>
                  <a className="inline-block bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700">
                    Apply Now
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {jobs.length > limit && !isHomePage && (
          <div className="text-center mt-6 bg-white py-4">
            <button
              onClick={() => {
                setShowMore(!showMore);
                if (!showMore) window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-blue-600 hover:underline"
            >
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
