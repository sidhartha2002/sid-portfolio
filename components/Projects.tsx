import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import {
  foodWeb1,
  foodWeb2,
  foodWeb3,
  projectIssueTracker,
  projectFoodDashboard,
} from "@/public/assets";
import { RiGithubLine } from "react-icons/ri";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="Projects I built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Projects 1 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              href="https://ecommerce-app-etwy.vercel.app/"
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
              <h3 className="text-2xl font-bold">
                Serverless e-Commerce App with Admin App
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-center xl:text-right">
                This project is a serverless ecommerce app crafted with Next.js,
                Tailwind CSS, PlanetScale for the database, Clerk for
                authentication, and Stripe for checkout. It highlights my skills
                in UI/UX design, serverless architecture, and integrating
                diverse technologies for seamless user experience.
              </p>
              <ul className="flex gap-2 justify-between text-xs md:text-sm font-titleFont -tracking-wide md:gap-5 text-textDark">
                <li>NextJS 13</li>
                <li>Typescript</li>
                <li>Tailwind</li>
                <li>PlanetScale</li>
                <li>Stripe</li>
                <li>Clerk</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/sidhartha2002/ecommerce-app"
                  target="_blank"
                  className="hover:text-textGreen duration-300 "
                >
                  <RiGithubLine />
                </a>
                <a
                  href="https://ecommerce-app-eight-gamma.vercel.app/"
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
              href="https://github.com/sidhartha2002/Issue-Tracker"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={projectIssueTracker}
                  alt="Ecommerce"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 items-center xl:items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Issue Tracker</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md text-center xl:text-right">
                This project is a minimalistic web application to keep track
                your labeled issues using Next.js and Tailwind CSS. Leveraging
                React Query for efficient data fetching and state management,
                this app offers features like automatic synchronization, issue
                filtering, addition of issues, and labeling functionalities.
              </p>
              <ul className="text-xs md:text-sm font-titleFont -tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>NextJS</li>
                <li>Typescript</li>
                <li>Tailwind CSS</li>
                <li>Vercel</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/sidhartha2002/Issue-Tracker"
                  target="_blank"
                  className="hover:text-textGreen duration-300 "
                >
                  <RiGithubLine />
                </a>
                <a
                  href="https://github.com/sidhartha2002/Issue-Tracker"
                  target="_blank"
                  className="hover:text-textGreen duration-300 "
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Projects 3 */}
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
                  src={projectFoodDashboard}
                  alt="foodWeb1"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 items-center xl:items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Food App Dashboard</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-center xl:text-right">
                A food website dashboard offers users a convenient hub to
                explore recipes, plan meals, and interact with a culinary
                community. It includes user profiles, curated recipes with
                filters, a meal planner with shopping lists, cooking guides, and
                social engagement features. Nutritional info and ingredient
                alternatives enhance the cooking experience.
              </p>
              <ul className="flex gap-2 justify-between text-xs md:text-sm font-titleFont -tracking-wide md:gap-5 text-textDark">
                <li>NextJS 13</li>
                <li>Typescript</li>
                <li>Tailwind</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/sidhartha2002/ecommerce-app"
                  target="_blank"
                  className="hover:text-textGreen duration-300 "
                >
                  <RiGithubLine />
                </a>
                <a
                  href="https://ecommerce-app-eight-gamma.vercel.app/"
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
