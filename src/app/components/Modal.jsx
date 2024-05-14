import { RxCross2 } from "react-icons/rx";
import { FiMinus } from "react-icons/fi";
import { CiMaximize1 } from "react-icons/ci";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const Modal = ({ title, children, closeModal }) => {
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
      bgColor: "bg-[#FFBD44]",
      action: minimizeWindow,
    },
    {
      name: "maximize",
      icon: <CiMaximize1 />,
      bgColor: "bg-[#28C941]",
      action: maximizeWindow,
    },
    {
      name: "close",
      icon: <RxCross2 />,
      bgColor: "bg-[#FF605C]",
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
      className="w-screen h-[80vh] fixed top-[5vh] left-0 px-[10%] flex justify-center items-center"
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
        className={`bg-[#ECECEC] border-2 border-gray-200 overflow-hidden rounded-md shadow-md ${
          windowSize === "minimized" ? "w-[500px] h-[500px]" : "w-[80%] h-[80%]"
        }`}
      >
        {/* Control Bar */}
        <div className="relative border-b-[0.5px] border-gray-400 h-10 bg-[#F7F7F7] w-full flex items-center px-2 top-0 left-0">
          <div className="absolute top-0 left-[8px] flex h-full items-center gap-1 group">
            {modalControlButtons.map((button, index) => (
              <button
                key={index}
                type="button"
                className={`w-4 h-4 group p-2 rounded-full shadow flex justify-center items-center ${button.bgColor}`}
                onClick={button.action}
              >
                <span className="text-gray-700 text-xs hidden transition-all ease-in-out duration-300 group-hover:block">
                  {button.icon}
                </span>
              </button>
            ))}
          </div>
          <div className="w-full h-full cursor-move flex justify-center items-center text-[#525252] font-sans">
            {title}
          </div>
        </div>
        {/* Main Content */}
        <div className="h-full overflow-y-auto bg-[#F4F4F4] pb-16">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
