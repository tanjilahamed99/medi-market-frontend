import React from "react";
import { ImSpinner10 } from "react-icons/im";
import YellowBtn from "./YellowBtn";

const SubmitBtn = ({ loading, loadingTxt, notLoadingTxt, className }: any) => {
  return (
    <YellowBtn
      className={`${
        loading ? "flex justify-center items-center gap-2" : ""
      } text-sm  ${className}`}
    >
      {loading && <ImSpinner10 className="animate-spin" />}
      {loading ? loadingTxt : notLoadingTxt}
    </YellowBtn>
  );
};

export default SubmitBtn;
