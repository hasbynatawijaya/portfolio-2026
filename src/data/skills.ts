export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: 'expert' | 'advanced' | 'intermediate';
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Technologies',
    skills: [
      { name: 'React.js', level: 'expert' },
      { name: 'Next.js', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'JavaScript (ES6+)', level: 'expert' },
      { name: 'Angular', level: 'advanced' },
      { name: 'Redux', level: 'expert' },
      { name: 'React Query', level: 'advanced' },
      { name: 'HTML5', level: 'expert' },
      { name: 'CSS3', level: 'expert' },
      { name: 'Tailwind CSS', level: 'advanced' },
      { name: 'Material UI', level: 'advanced' },
      { name: 'Styled Components', level: 'advanced' },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'Express', level: 'advanced' },
      { name: 'C#', level: 'intermediate' },
      { name: '.NET', level: 'intermediate' },
      { name: 'ASP.NET', level: 'intermediate' },
      { name: 'SQL Server', level: 'intermediate' },
      { name: 'NoSQL', level: 'intermediate' },
    ],
  },
  {
    category: 'Build & DevOps',
    skills: [
      { name: 'Webpack', level: 'advanced' },
      { name: 'Vite', level: 'advanced' },
      { name: 'Docker', level: 'advanced' },
      { name: 'Git', level: 'expert' },
      { name: 'AWS', level: 'intermediate' },
      { name: 'CI/CD Pipelines', level: 'advanced' },
      { name: 'Jest', level: 'advanced' },
      { name: 'Unit Testing', level: 'advanced' },
    ],
  },
  {
    category: 'Architecture & APIs',
    skills: [
      { name: 'Micro-frontends', level: 'expert' },
      { name: 'Component Libraries', level: 'expert' },
      { name: 'RESTful APIs', level: 'expert' },
      { name: 'GraphQL', level: 'advanced' },
      { name: 'Design Systems', level: 'advanced' },
      { name: 'Server-Side Rendering', level: 'expert' },
    ],
  },
  {
    category: 'Leadership & Soft Skills',
    skills: [
      { name: 'Technical Mentoring', level: 'expert' },
      { name: 'Code Review', level: 'expert' },
      { name: 'Cross-functional Collaboration', level: 'expert' },
      { name: 'Agile/Scrum', level: 'advanced' },
      { name: 'Architectural Decision Making', level: 'expert' },
    ],
  },
];
