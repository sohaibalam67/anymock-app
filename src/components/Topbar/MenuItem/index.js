import React from "react";

const MenuItem = (props) => {
  let { icon = "💥", title = "Item", ...rest } = props;
  return (
    <button
      className="w-12 h-12 flex flex-col items-center justify-center text-white text-xs focus:outline-none"
      {...rest}
    >
      {icon}
      {title}
    </button>
  );
};

export default MenuItem;
