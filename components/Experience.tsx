import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import CyberSecurity from "./works/EY";
import Codex from "./works/Codex";
import Ibm from "./works/Ibm";

const Experience = () => {
  const [workEy, setWorkEy] = useState(true);
  const [workCodex, setworkCodex] = useState(false);
  const [workIbm, setWorkIbm] = useState(false);

  const handleEy = () => {
    setWorkEy(true);
    setworkCodex(false);
    setWorkIbm(false);
  };
  const handleIbm = () => {
    setWorkEy(false);
    setworkCodex(false);
    setWorkIbm(true);
  };
  const handleHackodex = () => {
    setWorkEy(false);
    setworkCodex(true);
    setWorkIbm(false);
  };

  return (
    <section
      id="experience"
      className="max-w-containerSmall mx-auto py-10 lgl:py-24 px-4 lgl:mb-10"
    >
      <SectionTitle title="Where I have worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16 lgl:mt-20">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleEy}
            className={`${
              workEy
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            EY India
          </li>
          <li
            onClick={handleIbm}
            className={`${
              workIbm
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 p-8 font-medium`}
          >
            IBM
          </li>
          <li
            onClick={handleHackodex}
            className={`${
              workCodex
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 p-8 font-medium`}
          >
            Hackodex
          </li>
        </ul>
        {/* using the above useState if true to show the contents in the screen */}
        {workEy && <CyberSecurity />}
        {workCodex && <Codex />}
        {workIbm && <Ibm />}
      </div>
    </section>
  );
};

export default Experience;
