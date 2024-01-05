import React from "react";
import Logo from "./images/Logo";
import Menu from "./images/Menu";

const Navbar = () => {
  return (
    <nav className="hidden md:visible fixed z-40 backdrop-blur-sm text-white text-lg md:flex items-center w-full h-[100px] mx-auto px-10 bg-[#1E2834]/50">
      <button
        className="mr-16"
        onClick={() => {
          if (document.location.pathname != "/") window.location.href = "/";
        }}
        onKeyDown={() => {
          if (document.location.pathname != "/") window.location.href = "/";
        }}
      >
        <Logo />
      </button>
      <button
        className="flex w-[150px] h-full justify-center items-center hover:bg-white hover:text-black duration-300 ease-in"
        onClick={() => {
          if (document.location.pathname != "/")
            window.location.href = "/#work";
          document
            .getElementById("work")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        work
      </button>
      <button
        className="flex w-[150px] h-full justify-center items-center hover:bg-white hover:text-black duration-300 ease-in"
        onClick={() => {
          if (document.location.pathname != "/")
            window.location.href = "/#services";
          document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        services
      </button>
      <button
        className="flex w-[150px] h-full justify-center items-center hover:bg-white hover:text-black duration-300 ease-in"
        onClick={() => {
          if (document.location.pathname != "/")
            window.location.href = "/#contact";
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        contact
      </button>
    </nav>
  );
};

export default Navbar;
