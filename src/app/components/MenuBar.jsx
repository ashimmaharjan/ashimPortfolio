import { MdOutlineCatchingPokemon } from "react-icons/md";

import {
  IoVideocam,
  IoBatteryFullOutline,
  IoWifi,
  IoSearchOutline,
} from "react-icons/io5";
import { FaServer } from "react-icons/fa6";
import { useEffect, useState } from "react";

const MenuBar = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const formattedDate = formatDate(currentDate);
      setDateTime(formattedDate);
    }, 1000); // Update every second

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleDateString("en-US", options).replace(/,/g, "");
  };

  const menuBarItems = [
    {
      itemName: "File",
    },
    {
      itemName: "Edit",
    },
    {
      itemName: "View",
    },
    {
      itemName: "Window",
    },
    {
      itemName: "Help",
    },
  ];

  const menuBarIcons = [
    {
      icon: <IoVideocam />,
    },
    {
      icon: <IoBatteryFullOutline />,
    },
    {
      icon: <IoWifi />,
    },
    {
      icon: <IoSearchOutline />,
    },
    {
      icon: <FaServer />,
    },
  ];

  return (
    <section>
      <div className="glass w-screen fixed top-0 left-0 h-10 flex items-center py-3 px-5">
        <div className="flex items-center text-white gap-5">
          <MdOutlineCatchingPokemon className="size-6" />

          {menuBarItems.map((item, index) => (
            <p className="cursor-pointer font-sans font-light" key={index}>
              {item.itemName}
            </p>
          ))}
        </div>

        <div className="flex items-center text-white gap-5 ml-auto">
          {menuBarIcons.map((item, index) => (
            <p className="font-light cursor-pointer text-lg" key={index}>
              {item.icon}
            </p>
          ))}

          <p className="font-sans font-light">{dateTime}</p>
        </div>
      </div>
    </section>
  );
};

export default MenuBar;
