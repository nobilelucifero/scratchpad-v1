import React from "react";

const Icon = ({ name, color = "black", size = "24", style = {}, ...props }) => {
  const SvgIcon = require(`../../public/icons/${name}.svg`).default;
  return (
    <SvgIcon
      style={{ color, width: size, height: size, ...style }}
      {...props}
    />
  );
};

export default Icon;
