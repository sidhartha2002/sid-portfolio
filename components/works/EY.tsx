import React from "react";
import { motion } from "framer-motion";
import { SiWireshark } from "react-icons/si";
import { LuArrowBigRightDash } from "react-icons/lu";

const CyberSecurity = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        CyberSecurity
        <span className="text-textGreen tracking-wide">@Trainee</span>
      </h3>
      <p className="text-sm font-medium text-textDark mt-1">
        July 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <LuArrowBigRightDash />
          </span>
          Worked independently and as part of a team to complete projects.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <LuArrowBigRightDash />
          </span>
          Learnt to Apply knowledge of cybersecurity principles to identify and
          mitigate security risks.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <LuArrowBigRightDash />
          </span>
          Documented and learnt proficiency in a variety of cybersecurity and
          networking technologies.
        </li>
        <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textGreen">
          <div className="flex gap-4">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SiWireshark />
            </span>
          </div>
        </div>
      </ul>
    </motion.div>
  );
};

export default CyberSecurity;
