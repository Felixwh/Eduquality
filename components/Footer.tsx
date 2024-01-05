import React from "react";

const Footer = () => {
  return (
    <div className="px-2 md:px-10 flex py-6 text-white text-sm md:text-base">
      <p className="mr-2 md:mr-6 cursor-default">Copyright © Luis Kameter</p>
      <button
        onClick={() => {
          window.location.href = "/imprint";
        }}
        className="mx-2 md:mx-6"
      >
        imprint
      </button>
      <button
        onClick={() => {
          window.location.href = "/privacy";
        }}
        className="mx-2 md:mx-6"
      >
        privacy policy
      </button>
    </div>
  );
};

export default Footer;
