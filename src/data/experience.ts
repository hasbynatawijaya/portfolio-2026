export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  achievements: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: 'csg-international',
    company: 'CSG International',
    companyUrl: 'https://www.csgi.com/',
    position: 'Senior Frontend Engineer',
    location: 'Jakarta, Indonesia',
    startDate: '2025-07',
    endDate: 'Present',
    current: true,
    achievements: [
      'Architected micro-frontend migration strategy to modernize legacy AngularJS enterprise platform serving thousands of telecom billing users, enabling gradual Angular integration while maintaining business continuity for mission-critical Quote & Order workflows',
      'Led 3-person frontend team within cross-functional squad, driving architectural decisions, implementing code review standards, and mentoring mid-level engineers',
      'Implemented containerized development environment using Docker, standardizing local and staging setups across engineering team and eliminating environment inconsistency issues',
      'Served as frontend subject matter expert for core Quote & Order application, ensuring platform stability and optimal performance for enterprise telecommunications clients across APAC region',
    ],
    tags: ['Angular', 'Micro-frontends', 'Docker', 'TypeScript', 'Technical Leadership'],
  },
  {
    id: 'trutrip-2',
    company: 'TruTrip',
    companyUrl: 'https://trutrip.id/',
    position: 'Frontend Engineer',
    location: 'Jakarta, Indonesia',
    startDate: '2022-12',
    endDate: '2025-07',
    current: false,
    achievements: [
      'Engineered sophisticated booking policy management system enabling dynamic travel policy enforcement and approval workflows, directly contributing to 30% revenue growth for the corporate travel booking platform',
      'Optimized application performance by implementing React Query for intelligent data fetching and caching, reducing redundant API calls by 30% and significantly improving load times across all booking workflows',
      'Developed and shipped 3 comprehensive analytics dashboards providing real-time insights on booking patterns, policy compliance, and travel spend, enabling data-driven decision-making for 100+ corporate clients',
      'Implemented clustering algorithm for hotel map visualization using third-party mapping APIs, optimizing rendering performance for searches returning 500+ results and improving user experience',
    ],
    tags: ['React', 'React Query', 'Analytics', 'Performance Optimization', 'APIs'],
  },
  {
    id: 'brick',
    company: 'Brick',
    companyUrl: 'https://onebrick.io/',
    position: 'Frontend Engineer',
    location: 'Jakarta, Indonesia',
    startDate: '2022-01',
    endDate: '2022-11',
    current: false,
    achievements: [
      'Created comprehensive user portal with React.js and Redux featuring real-time transaction reporting, bulk disbursement tools, API key management, and customizable widgets, empowering B2B clients with self-service capabilities',
      'Designed and implemented internal analytics dashboard providing operations team with real-time visibility into API usage patterns, transaction volumes, and system health metrics for proactive monitoring',
      'Developed headless CMS-powered marketing website using Next.js, DatoCMS, and GraphQL, enabling non-technical marketing team to update content independently and reducing developer dependency by 80%',
      'Built embeddable authentication widget enabling users to securely connect bank accounts, e-commerce platforms, and e-wallets, serving as core integration point for Brick\'s open finance API and supporting hundreds of enterprise clients',
    ],
    tags: ['React', 'Redux', 'Next.js', 'GraphQL', 'DatoCMS', 'Fintech'],
  },
  {
    id: 'trutrip-1',
    company: 'TruTrip',
    companyUrl: 'https://trutrip.id/',
    position: 'Frontend Engineer',
    location: 'Jakarta, Indonesia',
    startDate: '2019-11',
    endDate: '2021-12',
    current: false,
    achievements: [
      'Served as founding frontend engineer, architecting and building TruTrip\'s core application from scratch using React.js, Redux, and Material UI, establishing the technical foundation that scaled to support 100+ weekly bookings',
      'Delivered production-ready MVP in 4 months featuring complete flight and hotel booking workflows, corporate travel policy engine, trip history management, and comprehensive reporting dashboards, enabling successful launch with initial corporate clients',
      'Collaborated directly with founders, product team, and backend engineers to define product requirements, user flows, and technical architecture in fast-paced startup environment with rapid iteration cycles',
      'Established frontend development standards including component architecture patterns, state management conventions, and code review processes that supported platform growth and engineering team expansion',
    ],
    tags: ['React', 'Redux', 'Material UI', 'MVP Development', 'Startup'],
  },
  {
    id: 'gadjian',
    company: 'Gadjian',
    companyUrl: 'https://www.gadjian.com/',
    position: 'Frontend Engineer',
    location: 'Jakarta, Indonesia',
    startDate: '2018-11',
    endDate: '2019-11',
    current: false,
    achievements: [
      'Built employee benefits marketplace platform (Payuung.com) from ground up using Next.js, successfully migrating 2,000+ users from legacy system and introducing integrated loans and insurance products from third-party financial providers',
      'Introduced Next.js to company tech stack, pioneering server-side rendering patterns and creating comprehensive documentation that enabled adoption across multiple product teams',
      'Launched MVP at Tech in Asia 2019 conference, showcasing platform capabilities to investors and potential enterprise customers in high-visibility startup showcase',
      'Integrated multiple third-party financial services APIs including loan providers and insurance carriers, implementing secure OAuth flows, webhook handling, and transaction processing logic',
    ],
    tags: ['Next.js', 'SSR', 'OAuth', 'Third-party APIs', 'Fintech'],
  },
  {
    id: 'emerio-indonesia',
    company: 'Emerio Indonesia',
    position: 'Software Engineer',
    location: 'Jakarta, Indonesia',
    startDate: '2017-09',
    endDate: '2018-11',
    current: false,
    achievements: [
      'Developed internal applications using ASP.NET C# and SQL Server for PT. Maybank Indonesia, supporting marketing operations and automated customer communication workflows for banking operations',
      'Built e-faktur tax invoice application using ASP.NET C# and SQL Server for Toyota Astra Motor automotive sales operations',
      'Designed database schemas and optimized SQL queries for production deployment',
    ],
    tags: ['ASP.NET', 'C#', 'SQL Server', 'Enterprise Applications'],
  },
];
