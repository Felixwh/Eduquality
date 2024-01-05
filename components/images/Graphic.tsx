import React from "react";

const Graphic = () => {
  return (
    <img
      src="/graphic.jpg"
      alt="Design"
      sizes="1900px,850px"
      style={{
        objectFit: "cover",
        objectPosition: "center",
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default Graphic;
