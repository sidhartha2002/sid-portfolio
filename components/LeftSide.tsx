import React from "react";
import { FaGithubSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textGreen">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/sidhartha2002">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/sidhartha2002">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaLinkedin />
          </span>
        </a>
        <a href="https://auth.geeksforgeeks.org/user/sidhartha2002">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SiGeeksforgeeks />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
