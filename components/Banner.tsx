import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py24 flex flex-col justify-center items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4 xl:mt-20"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi 👋, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Sidhartha Mohanty
        <TypeAnimation
          className="text-sm md:text-xl text-center lgl:text-3xl text-textDark mt-2 lgl:mt-4 flex flex-col items-center"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "A Web Developer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "A Creative Developer",
            1000,
            "A Dedicated Learner",
            1000,
            "A Jamstack Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            display: "inline-block",
            color: "#64ffda",
          }}
          repeat={Infinity}
        />
        {/* className="text-xl md:text-2xl text-textDark mt-2 lgl:mt-4 flex flex-col items-center" */}
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        <span className="text-xl">🚀</span> Creative, detail-oriented, and
        passionate web developer.Crafting sleek and user-centric websites that
        combine stunning design with seamless functionality. Eager to turn ideas
        into engaging online experiences.
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
      >
        Check out my Project!
      </motion.button>
    </section>
  );
};

export default Banner;
