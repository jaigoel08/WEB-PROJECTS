import Section from "../Section";
import { Briefcase } from "lucide-react";
import Project from "./Project";

const Projects = () => {
  const projectList = [
    {
      title: "airbnb Platform:",
      desc: "Developed a fully-functional e-commerce platform with user authentication, product management, and payment integration.",
      techUsed: ["HTML", "CSS", "JavaScript", "React.js" , "Node.js" , "Express.js"],
    },

    {
      title: "Calculator:",
      desc: "Created a responsive dashboard for social media analytics, featuring real-time data visualization and reporting.",
      techUsed: ["React.js", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Number Trivia App:",
      desc: "Created a number trivia app my tells random facts related to the number entered.",
      techUsed: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <Section icon={<Briefcase />} sectionTitle="Projects">
      {projectList.map(project => <Project title={project.title} desc={project.desc} techUsed={project.techUsed}/>)}
    </Section>
  );
};

export default Projects;