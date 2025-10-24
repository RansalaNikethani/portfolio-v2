// src/data/projectsData.js

export const projectsData = [
  {
    id: 1,
    title: "Visitor Management System (VMS)",
    subtitle: "Full-Stack MERN Application",
    description:
      "Developed an end-to-end visitor management solution using MERN Stack with Figma-based UI/UX workflows, implementing real-time visitor registration, tracking, and notifications.",
    role: "Full Stack Developer & QA",
    image: "/images/projects/p-4.jpeg",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "Figma"],
    githubLink: null,
    liveLink: null,
    demoType: "Government Project",
    qaHighlights: [
      "Authored and executed a comprehensive manual test suite covering all critical user flows.",
      "Ensured UI/UX designs from Figma were implemented with pixel-perfect accuracy and responsiveness.",
      "Implemented server-side input validation and wrote API tests with Postman to secure critical endpoints."
    ],
    categories: ["Full Stack", "Web App", "QA", "Government"],
  },
  {
    id: 2,
    title: "Intern Performance Monitoring System",
    subtitle: "Automated Evaluation & Reporting Dashboard",
    description:
      "Built with Laravel, Tailwind CSS, and MySQL, the system digitized intern task management and performance evaluation through role-based dashboards, automated reporting, and real-time feedback.",
    role: "Full Stack Developer",
    image: "/images/projects/p-6.jpeg",
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Chart.js", "Blade"],
    githubLink: null, 
    liveLink: null,
    demoType: "Government Project",
    qaHighlights: [
      "Secured sensitive performance data by implementing and validating a robust Role-Based Access Control (RBAC) system.",
      "Ensured a consistent user experience by performing rigorous cross-browser testing across Chrome, Firefox, and Edge.",
      "Validated all automated reporting and email notification triggers to confirm the reliability of the real-time feedback loop."
    ],
    categories: ["Full Stack", "Web App", "Government"],
  },
  {
    id: 3,
    title: "Craftsman System – QA Validation",
    subtitle: "Ensuring Reliability for a Government Platform",
    description:
      "Designed and executed manual test cases to validate system reliability, identified critical bugs, and collaborated with developers to improve production quality standards for this government-facing application.",
    role: "QA Tester",
    image: "/images/projects/p-5.jpeg",
    techStack: ["Manual Testing", "Test Case Design", "API Testing (Postman)", "Regression Testing", "Bug Reporting"],
    githubLink: null,
    liveLink: null,
    demoType: "Government Project",
    qaHighlights: [
      "Authored and executed a comprehensive suite of manual test cases, achieving over 95% coverage for all primary functionalities.",
      "Discovered and documented several critical pre-release bugs, including data validation and access control vulnerabilities.",
      "Conducted thorough regression testing after each sprint to ensure new features did not break existing functionality."
    ],
    categories: ["QA", "Government"],
  },
  {
    id: 4,
    title: "Mail Tracking System – QA & Validation",
    subtitle: "Validating Internal Business Logic",
    description:
      "Performed manual and system integration testing for an internal mail tracking application. Created detailed test documentation to ensure the application met all business requirements and user expectations.",
    role: "QA Tester",
    image: "/images/projects/p-7.jpeg",
    techStack: ["Manual Testing", "Test Case Design", "Integration Testing", "User Acceptance Testing", "Bug Documentation"],
    githubLink: null,
    liveLink: null,
    demoType: "Government Project",
    qaHighlights: [
      "Executed end-to-end integration tests to validate data flow between different system modules.",
      "Developed clear and concise test cases and bug reports, leading to faster developer resolution.",
      "Validated that all system functionalities aligned with the documented business requirements and user expectations."
    ],
    categories: ["QA", "Government"],
  },
  {
    id: 5,
    title: "Personal Portfolio (v1)",
    subtitle: "First Portfolio Website – Pure Frontend",
    description:
      "My first portfolio website built from scratch using only HTML, CSS, and vanilla JavaScript. It showcased my early design sensibilities and foundational web development skills with a focus on clean layout and responsive behavior.",
    role: "Frontend Developer & Designer",
    image: "/images/projects/p-1.png",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    githubLink: "https://github.com/RansalaNikethani/Portfolio",
    liveLink: "https://portfolio-ransala.netlify.app/",
    qaHighlights: [
      "Manually tested responsiveness across 5+ device widths using browser dev tools.",
      "Validated HTML and CSS using W3C validators to ensure standards compliance.",
      "Optimized asset loading for fast initial render on low-bandwidth connections."
    ],
    categories: ["Website"],
  },
  {
    id: 6,
    title: "SL Tours – Travel Website",
    subtitle: "Responsive Travel Experience with Bootstrap",
    description:
      "A fully responsive travel website featuring destination galleries, package listings, and contact forms. Built to demonstrate UI/UX principles and mobile-first development using Bootstrap and custom CSS.",
    role: "Web Designer & Developer",
    image: "/images/projects/p-2.png",
    techStack: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Font Awesome"],
    githubLink: "https://github.com/RansalaNikethani/Travel-website",
    liveLink: "https://sltours123.netlify.app/",
    qaHighlights: [
      "Ensured consistent layout across mobile, tablet, and desktop using Bootstrap’s grid system.",
      "Optimized image assets for fast loading without compromising visual quality."
    ],
    categories: ["Website"],
  },
  {
    id: 7,
    title: "Current Portfolio (2025)",
    subtitle: "Modern Developer Showcase with React & Tailwind",
    description:
      "My current portfolio site, built with React and Tailwind CSS, showcasing my full-stack and QA expertise through a clean, accessible, and performance-optimized interface. Designed with a focus on user experience, responsiveness, and code quality.",
    role: "Full Stack Developer & QA Engineer",
    image: "/images/projects/p-3.png",
    techStack: ["React", "Tailwind CSS", "React Router", "Vite", "Lucide React"],
    githubLink: "https://github.com/RansalaNikethani/portfolio-v2", 
    liveLink: "https://upuli-portfolio.netlify.app/", 
    qaHighlights: [
      "Achieved 93+ Lighthouse scores for performance, accessibility, and SEO through code splitting and semantic HTML."
    ],
    categories: [ "Website"],
  },
];