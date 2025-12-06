export interface Skill {
  name: string;
  category: string;
  level: string; // Expert / Intermediate / Basic / Strong
}

export const SKILLS = [
  { name: "HTML5", level: "Expert", category: "Expertise" },
  { name: "CSS3", level: "Expert", category: "Expertise" },
  { name: "JavaScript (ES6)", level: "Expert", category: "Expertise" },
  { name: "React.js", level: "Expert", category: "Expertise" },
  { name: "Tailwind CSS", level: "Expert", category: "Expertise" },
  { name: "Firebase", level: "Expert", category: "Expertise" },
  { name: "Next.js", level: "Comfortable", category: "Comfortable" },
  { name: "REST API", level: "Comfortable", category: "Comfortable" },
  { name: "Bootstrap", level: "Comfortable", category: "Comfortable" },
  { name: "Axios", level: "Familiar", category: "Familiar" },
  { name: "React Query", level: "Familiar", category: "Familiar" },
  { name: "JWT Auth", level: "Familiar", category: "Familiar" },
  { name: "Git", level: "Familiar", category: "Familiar" },
  { name: "Teamwork", level: "Soft", category: "Soft Skills" },
  { name: "Communication", level: "Soft", category: "Soft Skills" },
  { name: "Problem-Solving", level: "Soft", category: "Soft Skills" },
  { name: "Time Management", level: "Soft", category: "Soft Skills" },
  { name: "Adaptability", level: "Soft", category: "Soft Skills" },
];
