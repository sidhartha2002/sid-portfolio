import React from "react";
import { motion } from "framer-motion";
import { LuArrowBigRightDash } from "react-icons/lu";
import { RiReactjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Ibm = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        SkillBuild
        <span className="text-textGreen tracking-wide">@Intern</span>
      </h3>
      <p className="text-sm font-medium text-textDark mt-1">
        June 2023 - July 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <LuArrowBigRightDash />
          </span>
          Learnt and built projects on latest trends in web development by
          reading industry blogs, attending conferences, and courses.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <LuArrowBigRightDash />
          </span>
          Attented Mentorship sessions and Workshops for building
          production-ready scalable Web Applications.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <LuArrowBigRightDash />
          </span>
          Gained practical hands-on experience on front-end languages and
          frameworks.
        </li>
        <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textGreen">
          <div className="flex gap-4">
            <a href="#">
              <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <TbBrandNextjs />
              </span>
            </a>
            <a href="#">
              <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <RiReactjsFill />
              </span>
            </a>
            <a href="#">
              <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SiTailwindcss />
              </span>
            </a>
          </div>
        </div>
      </ul>
    </motion.div>
  );
};

export default Ibm;
