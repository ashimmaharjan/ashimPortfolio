"use client";

import Spline from "@splinetool/react-spline";
import ComputerIcon from "../../public/images/minecraft-dynamic-color.png";
import FileIcon from "../../public/images/file-text-dynamic-color.png";
import FolderIcon from "../../public/images/fav-folder-dynamic-color.png";
import ConatctIcon from "../../public/images/at-dynamic-color.png";
import HobbiesIcon from "../../public/images/paint-kit-dynamic-color.png";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  {
    name: "Home",
    iconPath: ComputerIcon,
  },
  {
    name: "Resume",
    iconPath: FileIcon,
  },
  {
    name: "Projects",
    iconPath: FolderIcon,
  },
  {
    name: "Hobbies",
    iconPath: HobbiesIcon,
  },
  {
    name: "Contact",
    iconPath: ConatctIcon,
  },
];

const Index = () => {
  return (
    <section className="bg-[#0A0921]">
      <div className="main-body h-[90vh]">
        <Spline
          className="w-10 h-10"
          scene="https://prod.spline.design/NElKZkKFiSvZtA3f/scene.splinecode"
        />
      </div>

      <div className="taskbar-wrapper">
        <div className="taskbar">
          {navItems.map((navItem, index) => (
            <motion.div
              key={index}
              initial={{ y: 125 }}
              whileInView={{
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 150,
                  delay: 0.5 + index * 0.1,
                  duration: 300,
                },
              }}
              whileHover={{
                scale: 1.2,
                color: "#ffffff",
                transition: { type: "spring", stiffness: 400, duration: 200 },
              }}
              className="navItem cursor-pointer"
            >
              <Image
                src={navItem.iconPath}
                alt={navItem.name}
                width={80}
                height={80}
                quality={100}
                placeholder="blur"
                objectFit="contain"
              />
              <p className="text-center text-xl">{navItem.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="taskbar-base h-full"></div>
      </div>
    </section>
  );
};

export default Index;
