import { RxCross2 } from "react-icons/rx";
import { FiMinus } from "react-icons/fi";
import { CiMaximize1 } from "react-icons/ci";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const Modal = ({ title, closeModal }) => {
  const [windowSize, setWindowSize] = useState("minimized");

  const maximizeWindow = () => {
    setWindowSize("maximized");
  };

  const minimizeWindow = () => {
    setWindowSize("minimized");
  };

  const modalControlButtons = [
    {
      name: "minimize",
      icon: <FiMinus />,
      bgColor: "bg-[#28CA41]",
      action: minimizeWindow,
    },
    {
      name: "maximize",
      icon: <CiMaximize1 />,
      bgColor: "bg-[#FFBD2E]",
      action: maximizeWindow,
    },
    {
      name: "close",
      icon: <RxCross2 />,
      bgColor: "bg-[#FF6059]",
      action: closeModal,
    },
  ];

  const constraintsRef = useRef(null);

  const scale = {
    minimized: 1,
    maximized: 1.2,
  };

  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center"
      ref={constraintsRef}
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        initial={{ scale: 0 }}
        animate={{
          scale: scale[windowSize],
          transition: {
            type: "spring",
            stiffness: 100,
            duration: 0.3,
          },
        }}
        className={`bg-[#ECECEC] border-2 border-gray-200 ${
          windowSize === "minimized" ? "w-[400px] h-96" : "w-[70%] h-[70%]"
        }`}
      >
        {/* Control Bar */}
        <div className="border-b-[0.5px] shadow-inner border-gray-600 h-10 bg-[#E8E7E8] w-full flex items-center px-2">
          <div className="w-full h-full cursor-move"></div>
          <div className="flex h-full items-center gap-1 ml-auto">
            {modalControlButtons.map((button, index) => (
              <button
                key={index}
                type="button"
                className={`w-4 h-4 group p-2 rounded-full shadow flex justify-center items-center ${button.bgColor}`}
                onClick={button.action}
              >
                <span className="text-gray-900 text-xs hidden group-hover:block">
                  {button.icon}
                </span>
              </button>
            ))}
          </div>
        </div>
        {/* Main Content */}
        <div className="h-full">
          <h2>This is modal inner child</h2>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
