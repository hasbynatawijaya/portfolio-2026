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
      'Own feature work in the Quote & Order application of CSG\'s enterprise telecom billing platform, shipping across a new Angular/TypeScript app and the legacy AngularJS app it runs inside through Module Federation',
      'Migrate legacy AngularJS screens to Angular incrementally, so the product keeps shipping while old code is replaced',
      'Maintain and extend the Node.js service owned by the frontend team: feature work, dependency upgrades, and its integration with the Angular front end',
      'Investigate and fix production issues across Quote & Order; regular code reviewer for the frontend team',
    ],
    tags: ['Angular', 'AngularJS', 'TypeScript', 'Module Federation', 'Node.js'],
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
      'Rehired by my former manager to work on the core booking product, which handled 100+ business bookings per week',
      'Built the booking policy and approval engine: each client company\'s travel policy modelled as configurable rules, evaluated on every booking, with approval flows for out-of-policy trips',
      'Normalized flight and hotel content from multiple suppliers into one model the UI could render, handling timeouts and partial results so search stayed usable',
      'Rebuilt the client data layer on React Query (cache keys, invalidation boundaries, refetch rules), removing duplicate requests and making search and checkout noticeably faster',
      'Added marker clustering to the hotel search map so it stayed responsive with hundreds of results',
      'Delivered three reporting dashboards for travel managers on bookings and spend, and a React Native app wrapping core booking flows for iOS and Android',
    ],
    tags: ['React', 'TypeScript', 'React Query', 'Redux', 'React Native'],
  },
  {
    id: 'brick',
    company: 'Brick',
    companyUrl: 'https://onebrick.io/',
    position: 'Frontend Engineer',
    location: 'Jakarta, Indonesia',
    startDate: '2022-01',
    endDate: '2022-12',
    current: false,
    achievements: [
      'Built the Brick widget, the embeddable flow end users go through to link bank, e-wallet and e-commerce accounts to partner apps, and the integration point for Brick\'s API clients',
      'Built the client portal in React, Redux and Material UI: transaction reporting, bulk disbursement, API key management and widget configuration',
      'Built an internal operations dashboard showing API usage and transaction volume',
      'Rebuilt the marketing site on Next.js, DatoCMS and GraphQL so the marketing team could publish without engineers',
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
      'First frontend hire. Built the booking web app from scratch in React, Redux and Material UI',
      'Shipped the MVP (flight and hotel booking, travel policy, trip history and reports), launching with TruTrip\'s first paying corporate clients',
      'Shaped the booking data model and API contracts with the founders and backend team',
      'Set the frontend conventions (component patterns, state management, code review) the team kept using as it grew',
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
      'Built Payuung.com, an employee benefits platform, from scratch in Next.js and migrated 2,000+ users from the legacy system',
      'Integrated third-party loan and insurance provider APIs',
      'Introduced Next.js and server-side rendering to the company; launched the MVP at Tech in Asia 2019',
    ],
    tags: ['Next.js', 'SSR', 'Third-party APIs'],
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
      'Toyota Astra Motor: built an e-Faktur tax invoicing application in ASP.NET C# and SQL Server, including schema design and query optimization',
      'Maybank Indonesia: built internal ASP.NET applications, including a marketing tool that automated sending brochures to customers by email',
    ],
    tags: ['ASP.NET', 'C#', 'SQL Server', 'Enterprise Applications'],
  },
];
