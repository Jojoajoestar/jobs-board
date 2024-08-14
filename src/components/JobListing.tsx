/**
 * JobListing Component
 *
 * This component renders a single job listing with a title, company name, job type, location, salary, and a description.
 * It also includes a "Read More" button to expand the description.
 *
 * Props:
 * - job: object - The job object containing details of the job.
 *
 * Example:
 * <JobListing job={job} />
 */

import React, { useState } from 'react';
import Link from 'next/link';

interface JobListingProps {
  job: {
    id: string; // Job ID
    title: string; // Job title
    type: string; // Job type (Full-Time, Part-Time, etc.)
    description: string; // Job description
    location: string; // Job location
    salary: string; // Job salary
    company: {
      name: string; // Company name
      description: string; // Company description
      contactEmail: string; // Company contact email
      contactPhone: string; // Company contact phone
    };
  };
}

const JobListing: React.FC<JobListingProps> = ({ job }) => {
  const [expanded, setExpanded] = useState(false); // State to handle description expansion

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4 hover:shadow-lg transition-shadow duration-300">
      <Link href={`/job/${job.id}`} legacyBehavior>
        <a>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </a>
      </Link>
      <p>{job.company.name}</p>
      <p className="text-gray-600">{job.type}</p>
      <p className="text-gray-600">{job.location}</p>
      <p className="text-gray-600">{job.salary}</p>
      <div>
        <p className="text-gray-600">
          {expanded ? job.description : `${job.description.substring(0, 100)}...`}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 hover:text-blue-800"
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
      <div className="mt-4">
        <Link href={`/job/${job.id}`} legacyBehavior>
          <a className="inline-block bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-300">
            More Info
          </a>
        </Link>
      </div>
    </div>
  );
};

export default JobListing;
