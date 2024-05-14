import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiPhp, SiLaravel, SiTerraform } from "react-icons/si";

import ReactIcon from "../../../public/images/react.png";
import VueIcon from "../../../public/images/vue.png";
import NodeJSIcon from "../../../public/images/nodejs.png";
import TailwindIcon from "../../../public/images/tailwind.png";
import AngularIcon from "../../../public/images/angularjs.png";
import HTMLIcon from "../../../public/images/html.png";
import CSSIcon from "../../../public/images/css.png";
import LaravelIcon from "../../../public/images/laravel-framework-logo.png";
import PHPIcon from "../../../public/images/php.png";

import "./Skills.css";
import Image from "next/image";

import { motion } from "framer-motion";

const Skills = () => {
  const mySkills = [
    {
      name: "HTML",
      type: "HTML",
      pokemonType: "Rock",
      hp: 100,
      weakness: "CSS",
      retreat: "None",
      footerText: "HTML Type",
      imagePath: HTMLIcon,
      color: "#e34c26",
      attack: {
        name: "Tag Tackle",
        damage: 40,
        description:
          "Tackles the opponent with a flurry of HTML tags, leaving them wrapped up.",
      },
    },
    {
      name: "CSS",
      type: "CSS",
      pokemonType: "Fairy",
      hp: 100,
      weakness: "JavaScript",
      retreat: "None",
      footerText: "CSS Type",
      imagePath: CSSIcon,
      color: "#264de4",
      attack: {
        name: "Style Slam",
        damage: 30,
        description:
          "Slams the opponent with stylish stylesheets, leaving them dazzled.",
      },
    },
    {
      name: "Tailwind",
      type: "Tailwind",
      pokemonType: "Flying",
      hp: 120,
      weakness: "Vanilla CSS",
      retreat: "None",
      footerText: "Tailwind Type",
      imagePath: TailwindIcon,
      color: "#38b2ac",
      attack: {
        name: "Gust of Glamour",
        damage: 50,
        description:
          "Unleashes a gust of glamour, making the opponent fly away in style.",
      },
    },
    {
      name: "React",
      type: "React",
      pokemonType: "Psychic",
      hp: 150,
      weakness: "Angular",
      retreat: "None",
      footerText: "React Type",
      imagePath: ReactIcon,
      color: "#61dafb",
      attack: {
        name: "Component Cannon",
        damage: 60,
        description:
          "Launches components like cannonballs, wreaking havoc on the opponent's code.",
      },
    },
    {
      name: "Vue",
      type: "Vue",
      pokemonType: "Electric",
      hp: 150,
      weakness: "React",
      retreat: "None",
      footerText: "Vue Type",
      imagePath: VueIcon,
      color: "#42b883",
      attack: {
        name: "Thunder Template",
        damage: 55,
        description: "Strikes the opponent with thunderous template updates.",
      },
    },
    {
      name: "Angular",
      type: "Angular",
      pokemonType: "Steel",
      hp: 150,
      weakness: "Vue",
      retreat: "None",
      footerText: "Angular Type",
      imagePath: AngularIcon,
      color: "#dd1b16",
      attack: {
        name: "Error-404 Strike",
        damage: 65,
        description:
          "Confuses the opponent with a flurry of 404 errors, leaving them bewildered.",
      },
    },
    {
      name: "Responsive Designs",
      type: "CSS",
      pokemonType: "Water",
      hp: 100,
      weakness: "Old Browsers",
      retreat: "None",
      footerText: "CSS Type",
      imagePath: CSSIcon,
      color: "#264de4",
      attack: {
        name: "Adaptive Surge",
        damage: 35,
        description:
          "Surges forward with adaptive design, overcoming obstacles.",
      },
    },
    {
      name: "Node.js",
      type: "Node.js",
      pokemonType: "Grass",
      hp: 130,
      weakness: "Blocking I/O",
      retreat: "None",
      footerText: "Node.js Type",
      imagePath: NodeJSIcon,
      color: "#68a063",
      attack: {
        name: "Root Regrowth",
        damage: 45,
        description:
          "Regrows and strengthens with the power of asynchronous roots.",
      },
    },
    {
      name: "PHP",
      type: "PHP",
      pokemonType: "Poison",
      hp: 120,
      weakness: "Security",
      retreat: "None",
      footerText: "PHP Type",
      imagePath: PHPIcon,
      color: "#777bb4",
      attack: {
        name: "Toxic Injection",
        damage: 50,
        description:
          "Injects toxic elements into the opponent's system, causing damage over time.",
      },
    },
    {
      name: "Laravel",
      type: "Laravel",
      pokemonType: "Ground",
      hp: 140,
      weakness: "Complexity",
      retreat: "None",
      footerText: "Laravel Type",
      imagePath: LaravelIcon,
      color: "#ff2d20",
      attack: {
        name: "Eloquent Strike",
        damage: 55,
        description:
          "Strikes with eloquence and precision, leaving no room for errors.",
      },
    },
    {
      name: "Terraform",
      type: "Terraform",
      pokemonType: "Fire",
      hp: 140,
      weakness: "Complex Syntax",
      retreat: "None",
      footerText: "Terraform Type",
      icon: <SiTerraform />,
      color: "#5c4ee5",
      attack: {
        name: "Inferno Blaze",
        damage: 60,
        description:
          "Engulfs the opponent in a blazing inferno, causing massive damage.",
      },
    },
  ];

  return (
    <section className="skills-container py-3">
      <div className="text-justify px-5">
        <h1 className="text-2xl font-semibold text-gray-700">
          My Professional Skills:
        </h1>
        <p className="text-gray-600">
          Below is a showcase of my technical skills, including my proficiency
          in various programming languages and frameworks. Each card represents
          a different skill, highlighting my expertise and the tools I use to
          build modern, responsive applications.
        </p>
      </div>

      <div className="cards-container mt-5">
        {mySkills.map((skill, index) => (
          <motion.div
            className="card"
            key={index}
            style={{
              backgroundImage: `linear-gradient(to top right, ${skill.color} 0%, #ffffff 100%)`,
            }}
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 80,
                delay: 0.1 + index * 0.08,
                duration: 100,
              },
            }}
          >
            <div className="card-header">
              <span>{skill.name}</span>
              <span className="card-hp">HP {skill.hp}</span>
            </div>
            {skill.icon ? (
              <div className="card-image">{skill.icon}</div>
            ) : (
              <div className="card-image">
                <Image
                  src={skill.imagePath}
                  alt={skill.name}
                  quality={100}
                  placeholder="blur"
                  width={80}
                  height={80}
                />
              </div>
            )}

            <div className="card-details">
              <span>Weakness: {skill.weakness}</span>
              <span>Retreat: {skill.retreat}</span>
            </div>
            <div className="card-footer">{skill.footerText}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
