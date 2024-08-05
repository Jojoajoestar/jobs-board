// src/types.ts
export interface Job {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  datePosted: string;
  experienceLevel: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
}
