import React from "react";
import HeroLeft from "./images/HeroLeft";
import HeroRight from "./images/HeroRight";

const Hero = () => {
  return (
    <div className="px-10 flex w-full min-h-screen justify-center md:items-center">
      <div className="hidden md:flex md:visible w-full h-[400px]">
        <div className="relative w-full">
          <HeroLeft />
        </div>
        <div className="relative w-full">
          <HeroRight />
        </div>
      </div>
      <div className="md:hidden w-[300px] mt-48">
        <div className="relative w-full">
          <HeroRight />
        </div>
        <div className="relative w-full">
          <HeroLeft />
        </div>
      </div>
    </div>
  );
};

export default Hero;
