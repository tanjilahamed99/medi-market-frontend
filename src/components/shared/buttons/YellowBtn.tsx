import React from "react";

const YellowBtn = ({ children, className, ...props }:any) => {
  return (
    <button
      className={`bg-primary-text rounded-sm font-semibold text-white px-4 py-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default YellowBtn;
