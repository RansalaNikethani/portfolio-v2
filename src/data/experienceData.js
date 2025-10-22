// src/data/experienceData.js
export const professionalExperience = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "Contruction Industry Development Authority",
    period: "March 2025 - September 2025",
    description: "Crucial 6-month internship focused on end-to-end software development, primarily utilizing the MERN stack.",
    details: [
      "Worked on a Visitor Management System using MERN stack (MongoDB, Express.js, React.js, Node.js), implementing key features and functionality.",
      "Created user interface designs and wireframes for VMS and other applications using Figma.",
      "Conducted comprehensive manual testing and created detailed test cases for Craftsman System and Mail Tracking System, ensuring software quality.",
      "Served as team coordinator, leading project teams and managing task delegation across multiple development initiatives.",
      "Worked closely with different departments to understand business needs and translate them into technical solutions."
    ],
    tech: ["MERN Stack", "Figma", "Manual Testing", "Team Coordination"],
    type: "Professional"
  },
  {
    id: 2,
    title: "Content Creator, Video Editor and Graphic Designer (Self-Employed)",
    company: "Freelance",
    period: "2022 - 2025",
    description: "Managed client projects and developed high-quality digital assets, demonstrating strong project management and design execution skills.",
    details: [
      "Designed print-ready and digital artworks, logos, and social media posts for various clients.",
      "Created content for Adobe Stock and Shutterstock platforms, generating AI images and design vector/raster artworks.",
      "Managed multiple client projects simultaneously while maintaining high quality standards."
    ],
    tech: ["Adobe Photoshop", "Adobe Illustrator", "Graphic Design", "Client Management"],
    type: "Professional"
  },
  {
    id: 3,
    title: "Web Designer and Graphic Designer",
    company: "Dilma Auto Trading (Pvt) Ltd",
    period: "October 2020 - October 2022",
    description: "Key role in digital presence overhaul, focusing on improving user experience and visual appeal.",
    details: [
      "Redesigned and updated company website using Laravel and Bootstrap, improving user experience and visual appeal.",
      "Developed responsive web interfaces that enhanced usability and engagement.",
      "Managed social media presence and created engaging digital content to increase brand visibility."
    ],
    tech: ["Laravel", "Bootstrap", "Web Design", "Social Media Management"],
    type: "Professional"
  },
];

export const educationHistory = [
  {
    id: 4,
    institution: "University of Vocational Technology",
    qualification: "Bachelor of Technology in Software Technology (Undergraduate)",
    period: "2022 - 2025 (Current GPA: 3.41/4.0)",
    details: ["Focused studies on software development methodologies, data structures, and modern programming languages."],
    type: "Education"
  },
  {
    id: 5,
    institution: "National Vocational Training Institute",
    qualification: "Diploma in Information & Communication Technology (NVQ - 5)",
    period: "2018 - 2019",
    details: ["Gained foundational knowledge in ICT principles and practical application."],
    type: "Education"
  },
  // Add other diploma/certificate entries here if desired
];

// Combine all data for the timeline
export const timelineData = [...professionalExperience, ...educationHistory].sort((a, b) => b.id - a.id);