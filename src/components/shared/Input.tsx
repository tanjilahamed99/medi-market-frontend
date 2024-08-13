import React from "react";

const Input = ({ className, type = "text", ...props }: any) => {
  return (
    <input
      type={type}
      className={`bg-[#80837E]/10 focus:outline-none rounded-md py-3 px-3 placeholder:text-sm ${className}`}
      {...props}
    />
  );
};

export default Input;
