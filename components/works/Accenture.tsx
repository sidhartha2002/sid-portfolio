import React from "react";
import { motion } from "framer-motion";
// import { SiWireshark } from "react-icons/si";
import { LuArrowBigRightDash } from "react-icons/lu";

const Accenture = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Accenture(Industry X)
        <span className="text-textGreen tracking-wide">@Intern</span>
      </h3>
      <p className="text-sm font-medium text-textDark mt-1">
        February 2024 - June 2024
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
          Explore various tools and software implemented in Software Defined Vehicles(SDV); 
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <LuArrowBigRightDash />
          </span>
          Documented and learnt variety of tools and language and discovered the true potential of AI in this field.
        </li>
{/*         <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textGreen">
          <div className="flex gap-4">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SiWireshark />
            </span>
          </div>
        </div> */}
      </ul>
    </motion.div>
  );
};

export default Accenture;
