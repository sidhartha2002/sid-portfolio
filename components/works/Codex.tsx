import React from "react";
import { motion } from "framer-motion";
import { LuArrowBigRightDash } from "react-icons/lu";

import {
  RiGithubLine,
  RiReactjsFill,
  RiHtml5Fill,
  RiCss3Fill,
} from "react-icons/ri";
import { BsGit } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";

export const Codex = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        OpenSource
        <span className="text-textGreen tracking-wide">@Contributor</span>
      </h3>
      <p className="text-sm font-medium text-textDark mt-1">
        April 2023 - May 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <LuArrowBigRightDash />
          </span>
          Achieved top position in an open-source competition as a dedicated
          contributor.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <LuArrowBigRightDash />
          </span>
          Gained practical coding experience and improved technical proficiency
          through active participation.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <LuArrowBigRightDash />
          </span>
          Demonstrated strong problem-solving skills and innovative thinking.
        </li>
        <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textGreen">
          <div className="flex gap-4">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <RiGithubLine />
            </span>
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <RiReactjsFill />
            </span>
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <RiHtml5Fill />
            </span>
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <RiCss3Fill />
            </span>
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SiTailwindcss />
            </span>
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <BsGit />
            </span>
          </div>
        </div>
      </ul>
    </motion.div>
  );
};
export default Codex;
