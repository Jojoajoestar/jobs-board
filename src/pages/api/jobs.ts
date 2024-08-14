import { NextApiRequest, NextApiResponse } from 'next';
import { Job } from '../../types/types';

const jobs: Job[] = [
  {
    id: "1",
    title: "Remote IT Support Technician",
    type: "Part-Time",
    description: "Provide remote IT support to small businesses. Experience with Windows and MacOS required.",
    location: "Remote",
    salary: "$20 - $30 / Hour",
    datePosted: "2023-01-01",
    experienceLevel: "Entry",
    company: {
      name: "SmallBiz IT Solutions",
      description: "SmallBiz IT Solutions provides comprehensive remote IT support for small businesses, ensuring they run smoothly with minimal downtime.",
      contactEmail: "support@smallbizit.com",
      contactPhone: "555-555-5555",
    }
  },
  {
    id: "2",
    title: "IT Consultant",
    type: "Contract",
    description: "Help small businesses set up and manage their IT infrastructure. Experience with network security and cloud services required.",
    location: "Remote",
    salary: "$50 - $70 / Hour",
    datePosted: "2023-02-01",
    experienceLevel: "Senior",
    company: {
      name: "Consulting Experts",
      description: "Consulting Experts specializes in providing top-notch IT consulting services to small businesses, helping them with their IT strategy and implementation.",
      contactEmail: "consult@consultingexperts.com",
      contactPhone: "555-555-5555",
    }
  },
  {
    id: "3",
    title: "IT Support Engineer",
    type: "Full-Time",
    description: "Provide comprehensive IT support to small businesses. Experience with troubleshooting hardware and software issues required.",
    location: "Remote",
    salary: "$60K - $80K / Year",
    datePosted: "2023-03-01",
    experienceLevel: "Mid",
    company: {
      name: "TechSupport Co.",
      description: "TechSupport Co. offers dedicated IT support services to small businesses, ensuring their technology systems are always operational.",
      contactEmail: "jobs@techsupportco.com",
      contactPhone: "555-555-5555",
    }
  },
  {
    id: "4",
    title: "System Administrator",
    type: "Full-Time",
    description: "Manage IT systems and ensure optimal performance for small businesses. Experience with Linux and Windows servers required.",
    location: "Remote",
    salary: "$70K - $90K / Year",
    datePosted: "2023-04-01",
    experienceLevel: "Senior",
    company: {
      name: "SysAdmin Services",
      description: "SysAdmin Services provides system administration services to small businesses, focusing on maintaining server uptime and security.",
      contactEmail: "admin@sysadminservices.com",
      contactPhone: "555-555-5555",
    }
  },
  {
    id: "5",
    title: "Helpdesk Support Specialist",
    type: "Part-Time",
    description: "Provide remote helpdesk support to small businesses. Strong communication skills and experience in troubleshooting required.",
    location: "Remote",
    salary: "$25 - $35 / Hour",
    datePosted: "2023-05-01",
    experienceLevel: "Entry",
    company: {
      name: "Helpdesk Heroes",
      description: "Helpdesk Heroes specializes in providing remote helpdesk support to small businesses, ensuring their issues are resolved quickly and efficiently.",
      contactEmail: "help@helpdeskheroes.com",
      contactPhone: "555-555-5555",
    }
  },
  {
    id: "6",
    title: "IT Project Manager",
    type: "Contract",
    description: "Lead IT projects for small businesses. Strong project management skills and experience in IT infrastructure required.",
    location: "Remote",
    salary: "$90K - $110K / Year",
    datePosted: "2023-06-01",
    experienceLevel: "Senior",
    company: {
      name: "Project IT",
      description: "Project IT manages IT projects for small businesses, ensuring they are completed on time and within budget.",
      contactEmail: "projects@projectit.com",
      contactPhone: "555-555-5555",
    }
  },
  {
    id: "7",
    title: "Junior IT Support Technician",
    type: "Full-Time",
    description: "Assist in providing remote IT support to small businesses. Basic knowledge of Windows and MacOS required.",
    location: "Remote",
    salary: "$40K - $50K / Year",
    datePosted: "2023-07-01",
    experienceLevel: "Entry",
    company: {
      name: "SmallBiz IT Solutions",
      description: "SmallBiz IT Solutions provides comprehensive remote IT support for small businesses, ensuring they run smoothly with minimal downtime.",
      contactEmail: "support@smallbizit.com",
      contactPhone: "555-555-5555",
    }
  },
  {
    id: "8",
    title: "Network Security Specialist",
    type: "Full-Time",
    description: "Ensure the security of small business networks. Experience with firewalls, VPNs, and intrusion detection systems required.",
    location: "Remote",
    salary: "$80K - $100K / Year",
    datePosted: "2023-08-01",
    experienceLevel: "Senior",
    company: {
      name: "SecureNet Solutions",
      description: "SecureNet Solutions specializes in providing network security services to small businesses, ensuring their data remains protected.",
      contactEmail: "jobs@securenetsolutions.com",
      contactPhone: "555-555-5555",
    }
  },
  {
    id: "9",
    title: "Cloud Solutions Architect",
    type: "Contract",
    description: "Design and implement cloud solutions for small businesses. Experience with AWS, Azure, or Google Cloud required.",
    location: "Remote",
    salary: "$100K - $120K / Year",
    datePosted: "2023-09-01",
    experienceLevel: "Senior",
    company: {
      name: "CloudExperts",
      description: "CloudExperts provides cloud consulting services to small businesses, helping them migrate to and optimize cloud environments.",
      contactEmail: "jobs@cloudexperts.com",
      contactPhone: "555-555-5555",
    }
  },
  {
    id: "10",
    title: "Desktop Support Technician",
    type: "Part-Time",
    description: "Provide desktop support to small business employees. Experience with troubleshooting hardware and software issues required.",
    location: "Remote",
    salary: "$30 - $40 / Hour",
    datePosted: "2023-10-01",
    experienceLevel: "Mid",
    company: {
      name: "SupportDesk Inc.",
      description: "SupportDesk Inc. offers desktop support services to small businesses, ensuring their employees can work without technical issues.",
      contactEmail: "jobs@supportdeskinc.com",
      contactPhone: "555-555-5555",
    }
  },
  {
    id: "11",
    title: "IT Operations Manager",
    type: "Full-Time",
    description: "Oversee IT operations for small businesses. Strong leadership and organizational skills required.",
    location: "Remote",
    salary: "$110K - $130K / Year",
    datePosted: "2023-11-01",
    experienceLevel: "Senior",
    company: {
      name: "OpsManage Solutions",
      description: "OpsManage Solutions provides IT operations management services to small businesses, ensuring their IT infrastructure runs smoothly.",
      contactEmail: "jobs@opsmanage.com",
      contactPhone: "555-555-5555",
    }
  },
  {
    id: "12",
    title: "Technical Support Engineer",
    type: "Full-Time",
    description: "Provide technical support for small business IT systems. Experience with remote troubleshooting tools required.",
    location: "Remote",
    salary: "$70K - $90K / Year",
    datePosted: "2023-12-01",
    experienceLevel: "Mid",
    company: {
      name: "TechHelp Co.",
      description: "TechHelp Co. offers technical support services to small businesses, ensuring their IT systems are always operational.",
      contactEmail: "jobs@techhelpco.com",
      contactPhone: "555-555-5555",
    }
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  try {
    switch (method) {
      case 'GET':
        let filteredJobs = jobs;

        if (query.id) {
          filteredJobs = filteredJobs.filter(j => j.id === query.id);
        }
        if (query.type) {
          filteredJobs = filteredJobs.filter(j => j.type === query.type);
        }
        if (query.location) {
          filteredJobs = filteredJobs.filter(j => j.location.toLowerCase().includes((query.location as string).toLowerCase()));
        }
        if (query.salary) {
          filteredJobs = filteredJobs.filter(j => j.salary.toLowerCase().includes((query.salary as string).toLowerCase()));
        }
        if (query.datePosted) {
          filteredJobs = filteredJobs.filter(j => new Date(j.datePosted) >= new Date(query.datePosted as string));
        }
        if (query.companyName) {
          filteredJobs = filteredJobs.filter(j => j.company.name.toLowerCase().includes((query.companyName as string).toLowerCase()));
        }
        if (query.experienceLevel) {
          filteredJobs = filteredJobs.filter(j => j.experienceLevel === query.experienceLevel);
        }

        res.status(200).json({ success: true, data: filteredJobs });
        break;

      case 'POST':
        const newJob = req.body as Job;
        jobs.push(newJob);
        res.status(201).json({ success: true, data: newJob });
        break;

      case 'PUT':
        const index = jobs.findIndex(j => j.id === (req.body as Job).id);
        if (index !== -1) {
          jobs[index] = req.body as Job;
          res.status(200).json({ success: true, data: jobs[index] });
        } else {
          res.status(404).json({ success: false, message: 'Job not found' });
        }
        break;

      case 'DELETE':
        const jobIndex = jobs.findIndex(j => j.id === query.id);
        if (jobIndex !== -1) {
          jobs.splice(jobIndex, 1);
          res.status(200).json({ success: true, message: 'Job deleted' });
        } else {
          res.status(404).json({ success: false, message: 'Job not found' });
        }
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}