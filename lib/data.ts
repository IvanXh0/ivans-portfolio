import codesnippet from "@/public/codesnippet.png";
import ivanszoo from "@/public/ivanszoo.png";
import aibuddysuite from "@/public/aibuddysuite.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectData = [
  {
    name: "CodeSnippet",
    url: "https://codesnippet.app/",
    description: "CodeSnippet is a code snippet sharing and editing platform.",
    tags: ["React", "NestJS", "Material UI", "MongoDB"],
    imageUrl: codesnippet,
  },
  {
    name: "Ivans Zoo",
    url: "https://github.com/IvanXh0/IvansZoo-ReactJS-NestJS",
    description: "Ivans Zoo is a zoo management platform.",
    tags: ["React", "NestJS", "Bootstrap", "PostgreSQL", "TypeORM"],
    imageUrl: ivanszoo,
  },
  {
    name: "AIBuddySuite",
    url: "https://ai-buddy-suite.vercel.app",
    description: "AIBuddySuite is an OpenAI inspired AI assistant.",
    tags: ["Next.js", "Go", "TailwindCSS", "Clerk", "OpenAI", "Shadcn"],
    imageUrl: aibuddysuite,
  },
] as const;
