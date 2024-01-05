import React from "react";

const Contact = () => {
  return (
    <a
      href="mailto:contact@luiskameter.com"
      className="relative flex px-10 mt-10 min-h-screen w-full justify-center items-center overflow-hidden"
      id="contact"
    >
      <div className="px-10 py-10 group ease-in-out lg:hover:bg-white lg:hover:shadow-[0_0_0_100px_#fff] duration-500">
        <p className="text-center mb-6 cursor-pointer text-white font-bold text-3xl md:text-6xl lg:text-9xl lg:group-hover:text-[#1E2834] duration-500 ease-in-out">
          GET IN TOUCH
        </p>
        <p className="underline text-[#1E2834] text-3xl">
          contact@luiskameter.com
        </p>
      </div>
    </a>
  );
};

export default Contact;
