import React from "react";
import ArchiveCard from "./ArchiveCard";
import { useState } from "react";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-containerSmall mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="User Dashboard"
          description="Created a website using React Hooks for efficient state management, complete with dynamic routes and component props. Leveraged various React libraries for enhanced functionality. "
          listItem={["NextJs, Tailwind, React-libraries"]}
          link="https://sidhartha2002-nextjs-user-dashboard.netlify.app/"
        />
        <ArchiveCard
          title="Investa"
          description="This website seamlessly integrating routes, sleek design, captivating animations, and optimal accessibility for a dynamic investment platform."
          listItem={["NextJs, Tailwind, HeadlessUI, Framer-Motion"]}
          link="https://investa-web.vercel.app/"
        />
        <ArchiveCard
          title="InstaMart"
          description="Developed a dynamic website using JavaScript scripting, React props for streamlined data flow, and integrated multiple React libraries for extended capabilities."
          listItem={["NextJs, Tailwind, Typescript, React-libraries"]}
          link="https://instamart-webstore.vercel.app/"
        />

        {showMore && (
          <>
            {/* project-4 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Parallax Webpage"
                description="Designed a sleek website using HTML, CSS, and JavaScript, featuring eye-catching animations for a dynamic user experience."
                listItem={["NextJs, Tailwind, Netlify"]}
                link="https://famous-sunshine-6cd5fe.netlify.app/"
              />
            </motion.div>
            {/* project-5 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Leeds Tracker"
                description="It get track of all your valuable URL(S) in one place which you want to explore later in future by simply adding it in your chrome browser extension."
                listItem={["NextJs, Tailwind, "]}
                link="#"
              />
            </motion.div>
            {/* project-6 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="EcoTours"
                description="Crafted an engaging website using HTML and leveraged innovative CSS pseudo-elements for captivating animations and visual effects."
                listItem={["CSS, HTML, Pseudo-elements"]}
                link="https://voluble-monstera-bedd70.netlify.app/"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
