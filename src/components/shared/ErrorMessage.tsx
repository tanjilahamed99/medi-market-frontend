import React from "react";

const ErrorMessage = ({ children }: any) => {
  return <p className="text-error text-xs">{children}</p>;
};

export default ErrorMessage;
