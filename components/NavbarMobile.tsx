import React from "react";
import Logo from "./images/Logo";
import Menu from "./images/Menu";
import { useEffect } from "react";

const NavbarMobile = () => {
  const toggleMenu = (node: any) => {
    if (node.classList.contains("menu-active")) {
      node.classList.remove("menu-active");
    } else {
      node.classList.add("menu-active");
    }
  };

  const scrollTo = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    document
      .getElementsByClassName("menu-active")[0]
      ?.classList.remove("menu-active");
  };

  return (
    <nav
      id="menu"
      className="fixed md:hidden z-40 backdrop-blur-sm text-white text-lg w-full h-[100px] mx-auto px-10 bg-[#1E2834]/50 overflow-hidden duration-700 ease-in-out"
    >
      <div className="flex w-full h-[100px]">
        <div className="mt-4">
          <button
            onClick={() => {
              if (document.location.pathname != "/") window.location.href = "/";
            }}
            onKeyDown={() => {
              if (document.location.pathname != "/") window.location.href = "/";
            }}
          >
            <Logo />
          </button>
        </div>
        <button
          className="w-[35px] h-[35px] ml-auto mt-7"
          onClick={() => {
            toggleMenu(document.getElementById("menu"));
          }}
        >
          <Menu />
        </button>
      </div>
      <div className="mt-20 text-white text-4xl font-black flex flex-col h-[60vh]">
        <div className="h-full w-full">
          <button
            className="h-full w-full text-left"
            onClick={() => {
              if (document.location.pathname != "/")
                window.location.href = "/#work";
              scrollTo("work");
            }}
            onKeyDown={() => {
              if (document.location.pathname != "/")
                window.location.href = "/#work";
              scrollTo("work");
            }}
          >
            work
          </button>
        </div>
        <div className="h-full w-full">
          <button
            className="h-full w-full text-left"
            onClick={() => {
              if (document.location.pathname != "/")
                window.location.href = "/#services";
              scrollTo("services");
            }}
            onKeyDown={() => {
              if (document.location.pathname != "/")
                window.location.href = "/#services";
              scrollTo("services");
            }}
          >
            services
          </button>
        </div>
        <div className="h-full w-full">
          <button
            className="h-full w-full text-left"
            onClick={() => {
              if (document.location.pathname != "/")
                window.location.href = "/#contact";
              scrollTo("contact");
            }}
            onKeyDown={() => {
              if (document.location.pathname != "/")
                window.location.href = "/#contact";
              scrollTo("contact");
            }}
          >
            contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;
