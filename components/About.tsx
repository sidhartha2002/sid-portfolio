import React from "react";
import SectionTitle from "./SectionTitle";
import { CgEditBlackPoint } from "react-icons/cg";
import { profileImg, profileImgRound } from "@/public/assets";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 lgl:mb-5"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            I &apos; m a passionate CS student at SOA University, specializing
            in crafting exceptional web experiences. My focus lies in UI/UX
            design and front-end development, where I harness the power of code
            to bring designs to life. I excel in front-end frameworks, and my
            strength lies in creating seamless user interfaces that are both
            visually appealing and highly functional. With a strong foundation
            in coding and an eye for detail, I &apos; m dedicated to delivering
            top-notch websites that leave a lasting impact.
          </p>
          <p>
            Here are the few technologies I have been working with recently:
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <CgEditBlackPoint />
              </span>
              HTML
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <CgEditBlackPoint />
              </span>
              CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <CgEditBlackPoint />
              </span>
              ReactJS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <CgEditBlackPoint />
              </span>
              NextJs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <CgEditBlackPoint />
              </span>
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <CgEditBlackPoint />
              </span>
              Javascript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <CgEditBlackPoint />
              </span>
              Typescript
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 z-20 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
