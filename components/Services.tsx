import React from "react";
import Websites from "./images/Websites";
import Graphic from "./images/Graphic";
import Guidance from "./images/Guidance";
import ScrollPosition from "../pages/api/ScrollPosition";
import Animation from "../pages/api/Animation";
import { useEffect, useState } from "react";

const Services = () => {
  const scroll = ScrollPosition().y;

  const animate = (node: any, height: number) => {
    node.style.height = `${Animation(node, height, 400, 500)}px`;
    node.style.filter = `saturate(${Animation(node, height, 0, 130)}%)`;
  };

  return (
    <div className="min-h-screen px-10" id="services">
      <p className="text-white font-black text-3xl w-full text-center mt-10">
        SERVICES
      </p>
      <p className="text-white text-base w-full text-center mt-2">
        The services I currently offer
      </p>
      <div
        className="relative w-full mt-20 h-[500px] group hover:shadow-2xl duration-1000 ease-in-out overflow-hidden"
        ref={(node) => {
          if (!node) return;
          animate(node, window.innerHeight);
        }}
      >
        <div className="absolute w-full h-full group-hover:scale-105 duration-1000 ease-in-out">
          <Websites />
        </div>
        <div className="absolute w-full h-[50%] top-[50%] bg-gradient-to-t from-black to-black/0"></div>
        <div className="absolute w-full max-w-[600px] bottom-14 px-6 lg:px-0 lg:left-40">
          <p className="text-2xl font-black text-white">Websites</p>
          <p className="leading-tight text-sm text-white mt-2 w-full">
            Transforming your vision into a stunning, functional website that
            reflects your identity. I specialize in web development for your
            business, brand or personal homepage, no matter how small or big
            your project is.
          </p>
        </div>
      </div>
      <div
        className="relative w-full mt-20 h-[500px] group hover:shadow-2xl duration-1000 ease-in-out overflow-hidden"
        ref={(node) => {
          if (!node) return;
          animate(node, window.innerHeight);
        }}
      >
        <div className="absolute w-full h-full group-hover:scale-105 duration-1000 ease-in-out">
          <Graphic />
        </div>
        <div className="absolute w-full h-[50%] top-[50%] bg-gradient-to-t from-black to-black/0"></div>
        <div className="absolute w-full max-w-[600px] bottom-14 px-6 lg:px-0 lg:left-40">
          <p className="text-2xl font-black text-white">Graphic design</p>
          <p className="leading-tight text-sm text-white mt-2 w-full">
            I elevate your digital presence through captivating visuals,
            ensuring your brand stands out in today`&apos;`s competitive market.
            Compelling designs, logos and graphics tailored to your exact use
            case.
          </p>
        </div>
      </div>
      <div
        className="relative w-full mt-20 h-[500px] group hover:shadow-2xl duration-1000 ease-in-out overflow-hidden"
        ref={(node) => {
          if (!node) return;
          animate(node, window.innerHeight);
        }}
      >
        <div className="absolute w-full h-full group-hover:scale-105 duration-1000 ease-in-out">
          <Guidance />
        </div>
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-black/0"></div>
        <div className="absolute w-full max-w-[600px] bottom-14 px-6 lg:px-0 lg:left-40">
          <p className="text-2xl font-black text-white">Online Guidance</p>
          <p className="leading-tight text-sm text-white mt-2 w-full">
            Empowering individuals to navigate the digital landscape with
            confidence. From understanding the basics to leveraging online
            potential, I am here to guide you every step along the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
