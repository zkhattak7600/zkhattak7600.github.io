// All portfolio content lives here. Search for "TODO" to find what is still a placeholder.
const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const PROFILE = {
  name: 'Zain Ul Abideen',
  initials: 'ZA',
  title: 'Software Engineer / Angular Developer',
  roles: ['Angular Developer', 'Software Engineer', 'Frontend Engineer'],
  location: 'Lahore, Pakistan',
  tagline: 'Software Engineer with 5+ years of experience crafting fast, scalable and user-friendly web applications with Angular & TypeScript.',
  cvUrl: '/cv.pdf',
  summary: [
    'Computer Science graduate and Software Engineer with 5+ years of professional experience building enterprise web applications, mainly with Angular and TypeScript.',
    'Hands-on experience across the full delivery cycle: requirement gathering, planning, execution and development.',
    'I care about delivering projects on time with a strong focus on quality, clean code and continuous learning.',
  ],
  stats: [
    { value: 5, suffix: '+', label: 'Years Experience' },
    { value: 5, suffix: '+', label: 'Projects' },
    { value: 3, suffix: '', label: 'Companies' },
  ],
  interests: ['🏋️ Gym', '🏏 Cricket', '📚 Reading', '✍️ Writing', '⚽ Foosball'],
  github: 'https://github.com/zkhattak7600',
  email: 'zaink7600@gmail.com',
  phone: '0312 8733340',
  phoneHref: 'tel:+923128733340',
  linkedin: 'https://www.linkedin.com/in/your-profile', // TODO: your LinkedIn URL
  formspreeEndpoint: 'https://formspree.io/f/your-form-id', // TODO: create a Formspree form and paste its endpoint
};

export const SKILL_GROUPS = [
  { title: 'Frontend', icon: '🎨', skills: [
    { name: 'Angular', level: 92, icon: `${DI}/angular/angular-original.svg` },
    { name: 'TypeScript', level: 88, icon: `${DI}/typescript/typescript-original.svg` },
    { name: 'JavaScript', level: 85, icon: `${DI}/javascript/javascript-original.svg` },
    { name: 'HTML5 / CSS3', level: 90, icon: `${DI}/html5/html5-original.svg` },
    { name: 'RxJS', level: 78, icon: `${DI}/rxjs/rxjs-original.svg` },
    { name: 'Kendo UI for Angular', level: 75, icon: '' },
    { name: 'Bootstrap / Tailwind', level: 85, icon: `${DI}/tailwindcss/tailwindcss-original.svg` },
  ]},
  { title: 'Backend & CS', icon: '⚙️', skills: [
    { name: 'REST APIs', level: 80, icon: '' },
    { name: '.NET Core (basics)', level: 60, icon: `${DI}/dotnetcore/dotnetcore-original.svg` },
    { name: 'C++', level: 65, icon: `${DI}/cplusplus/cplusplus-original.svg` },
    { name: 'OOP', level: 85, icon: '' },
    { name: 'Data Structures & Algorithms', level: 70, icon: '' },
  ]},
  { title: 'Tools', icon: '🛠️', skills: [
    { name: 'Git / GitHub', level: 85, icon: `${DI}/git/git-original.svg` },
    { name: 'VS Code / Visual Studio', level: 90, icon: `${DI}/vscode/vscode-original.svg` },
    { name: 'Swagger UI', level: 75, icon: `${DI}/swagger/swagger-original.svg` },
    { name: 'Tortoise SVN', level: 70, icon: '' },
    { name: 'IIS', level: 60, icon: '' },
    { name: 'MS Office', level: 80, icon: '' },
  ]},
];
// NOTE: skill levels are self-assessed estimates - adjust freely.

export type ProjectCategory = 'Professional' | 'Personal';
export interface Project {
  title: string; subtitle: string; category: ProjectCategory; icon: string; gradient: string;
  description: string; details?: string; images?: string[]; tech: string[]; features?: string[]; links?: { label: string; url: string }[]; featured?: boolean;
}
export const PROJECTS: Project[] = [
  {
    title: 'HR Portal', subtitle: 'Personal · Full-stack', category: 'Personal', icon: '🏢', featured: true,
    gradient: 'from-indigo-600 via-violet-600 to-cyan-500',
    description: 'A full-stack Human Resources management system with separate admin and employee portals.',
    details: 'An end-to-end HR platform built with Angular 18 standalone components on the front-end and a .NET 8 Web API with SQLite on the back-end. Admins manage employees, departments, attendance, leave and payroll, while employees get their own portal. Authentication uses JWT with role-based route guards and a forgot-password flow.',
    images: ['projects/hr-dashboard.png', 'projects/hr-employees.png', 'projects/hr-leaves.png', 'projects/hr-attendance.png', 'projects/hr-payroll.png', 'projects/hr-login.png'],
    tech: ['Angular 18', '.NET 8 Web API', 'SQLite', 'JWT', 'Tailwind'],
    features: ['Employees & departments', 'Attendance tracking', 'Leave requests & approvals', 'Payroll', 'JWT auth & role-based portals', 'Forgot-password flow'],
    links: [
      { label: 'Frontend', url: 'https://github.com/zkhattak7600/hr-portal-angular' },
      { label: 'API', url: 'https://github.com/zkhattak7600/hr-portal-api' },
    ],
  },
  {
    title: 'Sibme', subtitle: 'Learning Management System · 3S Solutions', category: 'Professional', icon: '🎓',
    gradient: 'from-sky-500 via-indigo-500 to-violet-600',
    description: 'Education platform for video coaching, peer feedback and professional learning communities.',
    details: 'Sibme is a learning management platform used for video coaching, peer feedback and professional learning communities. At 3S Solutions I work on its Angular (15+) front-end, building and improving features with TypeScript, JavaScript, HTML and CSS.',
    features: ['Video coaching', 'Peer feedback', 'Professional learning communities'],
    tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'The Retail Suite (TRS)', subtitle: 'Omni-channel Retail · I3RL', category: 'Professional', icon: '🛍️',
    gradient: 'from-violet-600 via-fuchsia-500 to-pink-500',
    description: 'Omni-channel retail software suite revamped to the latest stack, with an Angular + Kendo UI front-end and ASP.NET Core APIs.',
    details: 'The Retail Suite is an omni-channel retail software suite. At I3RL I helped revamp it from an older stack to Angular 8 with Kendo UI on the front-end and ASP.NET Core REST APIs (documented with Swagger) on the back-end, building features to client requirements and fixing bugs.',
    features: ['Revamped from legacy stack', 'Angular 8 + Kendo UI front-end', 'ASP.NET Core REST APIs', 'Client-driven features & bug fixes'],
    tech: ['Angular 8', 'Kendo UI', 'ASP.NET Core', 'REST API', 'Swagger'],
  },
  {
    title: 'E-Commerce Website', subtitle: 'Web Development', category: 'Personal', icon: '🛒',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    description: 'Responsive e-commerce website built with HTML, CSS, Bootstrap, JavaScript and PHP.',
    details: 'An e-commerce website built with HTML, CSS, Bootstrap and JavaScript on the front-end and PHP on the server side.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP'],
  },
  {
    title: 'Command Rescue 3D', subtitle: 'Final Year Project', category: 'Personal', icon: '🎮',
    gradient: 'from-orange-500 via-rose-500 to-red-600',
    description: 'A 3D zombie-fighting action game built as my final year project.',
    details: 'Command Rescue 3D is a zombie-fighting 3D game developed in Unity 3D with C# as my final year project for BS Computer Science.',
    tech: ['Unity 3D', 'C#'],
  },
];

export const EXPERIENCE = [
  { role: 'Software Engineer', company: '3S Solutions Pvt Ltd', location: 'Lahore', period: 'Dec 2022 – Present', current: true,
    tech: ['Angular 15+', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    points: ['Angular developer on Sibme, a learning platform for video coaching and professional learning communities.',
      'Develop front-end features with Angular 15+, TypeScript, JavaScript, HTML and CSS.',
      'Build innovative solutions focused on delivering great web experiences.'] },
  { role: 'Software Engineer', company: 'I3RL Pvt Ltd', location: 'Lahore', period: 'Mar 2021 – Nov 2022',
    tech: ['Angular', 'Kendo UI', '.NET Core', 'REST API', 'Swagger'],
    points: ['Revamped The Retail Suite from an old technology stack to Angular and .NET Core.',
      'Built new features according to client requirements.',
      'Identified and fixed bugs across the application.'] },
  { role: 'Web Developer / Web Designer', company: 'Encapsulate Solutions', location: 'Lahore', period: 'Aug 2018 – Feb 2019',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    points: ['Worked as a web developer and web designer on company web projects.'] },
];

export const EDUCATION = [
  { degree: 'BS Computer Science', school: 'University of South Asia, Lahore', period: '' },
  { degree: 'Intermediate (ICS)', school: 'Govt. Islamia College Civil Lines, Lahore', period: '' },
];
