import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import {
  foodWeb1,
  foodWeb2,
  foodWeb3,
  Ecommerce,
  project3,
  project5,
} from "@/public/assets";
import { RiGithubLine } from "react-icons/ri";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="Things I built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Projects 1 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              href="https://sidhartha2002-nextjs-user-dashboard.netlify.app/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={foodWeb1}
                  alt="foodWeb1"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 items-center xl:items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">eatiz Web</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-center xl:text-right">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <ul className="flex gap-2 justify-between text-xs md:text-sm font-titleFont -tracking-wide md:gap-5 text-textDark">
                <li>NextJS</li>
                <li>Typescript</li>
                <li>Tailwind CSS</li>
                <li>Vercel</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-textGreen duration-300 "
                >
                  <RiGithubLine />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-textGreen duration-300 "
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Projects 2 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              href="#"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={Ecommerce}
                  alt="Ecommerce"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 items-center xl:items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">EShop Web</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md text-center xl:text-right">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <ul className="text-xs md:text-sm font-titleFont -tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>NextJS</li>
                <li>Typescript</li>
                <li>Tailwind CSS</li>
                <li>Vercel</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-textGreen duration-300 "
                >
                  <RiGithubLine />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-textGreen duration-300 "
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              href="https://famous-sunshine-6cd5fe.netlify.app/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={foodWeb2}
                  alt="foodWeb1"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 items-center xl:items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Parallax Web</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-center xl:text-right">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <ul className="text-xs md:text-sm font-titleFont -tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Html</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>Netlify</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/sidhartha2002/Parallax-WebPage"
                  target="_blank"
                  className="hover:text-textGreen duration-300 "
                >
                  <RiGithubLine />
                </a>
                <a
                  href="https://famous-sunshine-6cd5fe.netlify.app/"
                  target="_blank"
                  className="hover:text-textGreen duration-300 "
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
