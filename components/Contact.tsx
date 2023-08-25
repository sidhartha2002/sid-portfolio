import React from "react";

const Contact = () => {
  return (
    <section
      id="connect"
      className="max-w-container mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04.Whats Next?
      </p>
      <h2 className="font-titleFont text-4xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Currently, I am actively seeking an Intership in my domain to further
        enhance my expertise and contribute to real-world projects. If you are
        looking for a Motivated, Creative, and Dedicated Frontend Developer, I
        would love to connect and explore potential Collaboration. Lets shape
        the digtal world together. 💻🚀
      </p>
      <a href="mailto:mohantysidhartha2002@gmail.com">
        <button className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
