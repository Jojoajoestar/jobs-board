import { NextApiRequest, NextApiResponse } from 'next';

// In-memory storage for applications
let applications: { jobId: string, name: string, email: string }[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  switch (method) {
    case 'POST':
      const { jobId, name, email } = body;
      applications.push({ jobId, name, email });
      res.status(201).json({ success: true });
      break;

    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
