import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiPhp, SiLaravel, SiTerraform } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const mySkills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "React", icon: <FaReact /> },
    { name: "Vue", icon: <FaVuejs /> },
    { name: "Angular", icon: <FaAngular /> },
    { name: "Responsive Designs", icon: <FaCss3Alt /> }, // Assuming using CSS for responsive designs
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "Laravel", icon: <SiLaravel /> },
    { name: "Terraform", icon: <SiTerraform /> },
  ];

  return (
    <section className="skills-container">
      <h1>This is the Skills Page</h1>
      <div className="cards-container">
        {mySkills.map((skill, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <span>{skill.name}</span>
              <span className="card-hp">HP {skill.hp}</span>
            </div>
            <div className="card-image">{skill.icon}</div>
            <div className="card-details">
              <span>Weakness: {skill.weakness}</span>
              <span>Retreat: {skill.retreat}</span>
            </div>
            <div className="card-footer">{skill.footerText}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
