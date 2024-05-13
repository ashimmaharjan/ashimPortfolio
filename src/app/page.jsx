"use client";

import Spline from "@splinetool/react-spline";
import ComputerIcon from "../../public/images/minecraft-dynamic-color.png";
import FileIcon from "../../public/images/file-text-dynamic-color.png";
import FolderIcon from "../../public/images/fav-folder-dynamic-color.png";
import ConatctIcon from "../../public/images/at-dynamic-color.png";
import HobbiesIcon from "../../public/images/paint-kit-dynamic-color.png";
import SkillsIcon from "../../public/images/magic-trick-dynamic-premium.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "./components/Modal";
import { useState } from "react";
import MenuBar from "./components/MenuBar";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

const Index = () => {
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
      name: "Skills",
      iconPath: SkillsIcon,
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

  const [modal, setModal] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const triggerModal = (navItem) => {
    setSelectedNavItem(navItem);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedNavItem(null);
  };

  const renderModalContent = () => {
    switch (selectedNavItem?.name) {
      case "Projects":
        return <Projects />;
      case "Skills":
        return <Skills />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-[#E0E0E3]">
      <MenuBar />
      <div className="main-body h-[90vh]">
        <Spline
          className="w-10 h-10"
          scene="https://prod.spline.design/VaXnwaqqTtMWsm67/scene.splinecode"
        />
      </div>

      <div className="taskbar-wrapper">
        <div className="taskbar">
          {navItems.map((navItem, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 150,
                  delay: 0.5 + index * 0.1,
                  duration: 300,
                },
              }}
              whileHover={{
                scale: 1.2,
                transition: { type: "spring", stiffness: 400, duration: 200 },
              }}
              className={`cursor-pointer relative py-1 px-2 group ${
                selectedNavItem?.name === navItem.name ? "activeNavItem" : ""
              }`}
              onClick={() => triggerModal(navItem)}
            >
              <Image
                src={navItem.iconPath}
                alt={navItem.name}
                width={80}
                height={80}
                quality={100}
                placeholder="blur"
              />
              <p className="absolute top-[-30px] left-0 hidden w-full justify-center items-center text-xl group-hover:text-gray-700 group-hover:flex">
                {navItem.name}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="taskbar-base h-full"></div>
      </div>

      {modal && (
        <Modal title={selectedNavItem?.name} closeModal={closeModal}>
          {renderModalContent()}
        </Modal>
      )}
    </section>
  );
};

export default Index;
