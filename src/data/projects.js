export const projects = [
  {
    title: 'Distributed ML Compute Marketplace',
    period: 'Jan 2026 - Present',
    bullets: [
      'Designed and built a distributed compute platform where users submit machine learning workloads executed in isolated Docker containers.',
      'Implemented automated containerization pipeline to package user-submitted ML model into runnable Docker images.',
      'Developed a job scheduling and execution service to run workloads on available compute nodes and manage job lifecycle states (PENDING, RUNNING, SUCCESS, FAILED).',
      'Integrated Razorpay payment gateway for per-job billing with wallet-based credits and automated charge calculation.',
    ],
    links: {
      code: 'https://github.com/shre0079/Distributed-ML-Compute-MarketPlace-Backend',
      demo: null,
    },
    tags: ['Java', 'HttpClient', 'SpringBoot', 'Docker', 'PostgreSQL', 'React.js'],
  },
  {
    title: 'Journal Application',
    period: 'Feb 2025 - April 2026',
    bullets: [
      'Built a cloud-native journal application using Spring Boot microservices and event-driven architecture with Kafka.',
      'Integrated MongoDB Atlas and Redis for data persistence and caching, improving API response time.',
      'Deployed the application using Docker and CI/CD pipelines.',
      'Integrated a third-party Weather API to enrich journal entries with real-time data.',
    ],
    links: {
      code: 'https://github.com/shre0079/journalApp',
      demo: null,
    },
    tags: ['Java', 'SpringBoot', 'Kafka', 'MongoDB', 'Redis', 'AWS'],
  },
];


