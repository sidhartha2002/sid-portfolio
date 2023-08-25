import React from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center w-[60vw] h-[0.1px] m-5 mx-auto bg-textDark"></div>
      <div className="flex mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4 text-textGreen">
        <div className="flex gap-4">
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
          <a href="#">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <FaFacebook />
            </span>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center mt-2 w-60 mx-auto text-center bg-hoverColor rounded-t-lg">
        Built with 💖 - by
        <span className="text-textGreen pl-2">SID</span>
      </div>
    </>
  );
};
export default Footer;
