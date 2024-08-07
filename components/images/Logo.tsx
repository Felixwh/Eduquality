import React from "react";

const Logo = () => {
  return (
    <img
      src="/logo.png"
      alt="logo"
      sizes="72px,72px"
      style={{ objectFit: "contain", width: "100%", height: "100%" }}
    ></img>
  );
};

export default Logo;
