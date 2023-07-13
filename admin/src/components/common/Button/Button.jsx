import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="bg-brand-light font-[500] cursor-pointer hover:scale-95 active:scale-90 p-2 px-7 rounded-md"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
