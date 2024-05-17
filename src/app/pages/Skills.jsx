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
import TerraformIcon from "../../../public/images/terraform.png";

import MetalTypeIcon from "../../../public/images/metal-type.png";
import FairyTypeIcon from "../../../public/images/fairy-type.png";
import PsychicTypeIcon from "../../../public/images/psychic-type.png";
import WaterTypeIcon from "../../../public/images/water-type.png";
import FireTypeIcon from "../../../public/images/fire-type.png";
import ColorlessIcon from "../../../public/images/colorless.png";

import Image from "next/image";

import { motion } from "framer-motion";

const Skills = () => {
  const mySkills = [
    {
      name: "HTML",
      pokemonType: "Metal",
      hp: 100,
      weakness: "CSS",
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
      pokemonType: "Fairy",
      hp: 100,
      weakness: "JavaScript",
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
      pokemonType: "Fairy",
      hp: 120,
      weakness: "Vanilla CSS",
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
      pokemonType: "Psychic",
      hp: 150,
      weakness: "Angular",
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
      pokemonType: "Psychic",
      hp: 150,
      weakness: "React",
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
      pokemonType: "Psychic",
      hp: 150,
      weakness: "Vue",
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
      name: "RWD",
      pokemonType: "Water",
      hp: 100,
      weakness: "Old Browsers",
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
      pokemonType: "Fire",
      hp: 130,
      weakness: "Blocking I/O",
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
      pokemonType: "Fire",
      hp: 120,
      weakness: "Security",
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
      pokemonType: "Fire",
      hp: 140,
      weakness: "Complexity",
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
      pokemonType: "Metal",
      hp: 140,
      weakness: "Complex Syntax",
      imagePath: TerraformIcon,
      color: "#5c4ee5",
      attack: {
        name: "Inferno Blaze",
        damage: 60,
        description:
          "Engulfs the opponent in a blazing inferno, causing massive damage.",
      },
    },
  ];

  const typeIcons = {
    Metal: MetalTypeIcon,
    Fairy: FairyTypeIcon,
    Psychic: PsychicTypeIcon,
    Water: WaterTypeIcon,
    Fire: FireTypeIcon,
  };

  const typeBackgrounds = {
    Water: "/images/water-type-bg.jpg",
    Metal: "/images/metal-type-bg.jpg",
    Fairy: "/images/fairy-type-bg.jpg",
    Psychic: "/images/psychic-type-bg.png",
    Fire: "/images/fire-type-bg.jpg",
  };

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

      <div className="mt-5 flex flex-wrap justify-center gap-8">
        {mySkills.map((skill, index) => (
          <motion.div
            key={index}
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
            whileHover={{
              y: -8,
              x: 5,
              transition: {
                type: "spring",
                stiffness: 280,
              },
            }}
            className="w-[80mm] h-[108mm] p-3 bg-[#FFE165] border-none rounded-[20px] shadow cursor-pointer"
          >
            {/* Main Card */}
            <div
              className="p-1.5 flex flex-col border w-full border-gray-800 h-full rounded-lg"
              style={{
                backgroundImage: `url(${typeBackgrounds[skill.pokemonType]})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              {/* Header */}
              <div className="flex w-full h-10">
                {/* Pill */}
                <div className="rounded-xl h-5 -ml-3 flex items-center text-center -skew-x-[10deg] px-2 bg-gradient-to-br from-gray-300 to-gray-50 border-gray-400 shadow-inner text-[#595757] text-[11px] border font-bold">
                  <span>BASIC</span>
                </div>
                <h2 className="text-2xl font-bold ml-1 -mt-0.5 pokemon-card-font">
                  {skill.name}
                </h2>
                {/* HP and type section */}
                <div className="flex ml-auto font-sans font-bold text-black gap-x-0.5">
                  <span className="text-[10px] mt-[13px] pokemon-card-font">
                    HP
                  </span>
                  <h2 className="text-2xl pokemon-card-font">{skill.hp}</h2>

                  <div className="rounded-full h-[28px] overflow-hidden bg-yellow-400 border-2 border-gray-50">
                    <Image
                      className="object-fill"
                      src={typeIcons[skill.pokemonType]}
                      alt={skill.pokemonType}
                      width={25}
                      height={25}
                      quality={100}
                    />
                  </div>
                </div>
              </div>

              {/* Skill Image Holder */}
              <div className="w-[95%] mx-auto -mt-1 h-40 flex justify-center items-center bg-white border-[3px] border-gray-300">
                <Image
                  src={skill.imagePath}
                  alt={skill.name}
                  width={120}
                  height={120}
                  quality={100}
                />
              </div>

              {/* Attact Information */}
              <div className="mt-5 px-2">
                <div className="flex justify-between items-center">
                  <Image
                    src={ColorlessIcon}
                    width={30}
                    height={30}
                    alt="colorlessIcon"
                    quality={30}
                  />

                  <h3 className="pokemon-card-font font-bold text-lg">
                    {skill.attack.name}
                  </h3>

                  <h3 className="pokemon-card-font font-bold text-lg">
                    {skill.attack.damage}
                  </h3>
                </div>

                <p className="pokemon-card-font mt-2 text-xs tracking-tighter leading-none text-justify">
                  {skill.attack.description}
                </p>
              </div>

              {/* Weakness */}
              <div className="mt-10 w-[65%] text-gray-700 h-auto px-5 shadow-inner ml-4 py-1 bg-gradient-to-tr from-gray-300 to-gray-50 border border-gray-400 rounded-2xl rounded-tl-none rounded-br-none">
                <p className="pokemon-card-font text-[10px]">
                  weakness : <b>{skill.weakness}</b>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
