"use client";
import React, { useState } from "react";
import AuthInput from "./AuthInput";
import AuthHeader from "./AuthHeader";
import ErrorMessage from "../shared/error/ErrorMessage";
import SubmitBtn from "../shared/buttons/SubmitBtn";
import axios from "axios";
import { BASE_URL } from "@/constant/constant";
import AuthContainer from "../containers/AuthContainer";

const ChangePassword = () => {
  const [error, setError] = useState({});
  const [data, setData] = useState({});
  const [changingPass, setChangingPass] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password1, password2 } = data || {};
    setError({ status: false, message: "" });

    if (!password1 || !password2) {
      return setError({
        status: true,
        message: "Please fill up all the fields",
      });
    }

    if (password1 !== password2) {
      return setError({
        status: true,
        message: "Both password does not match!",
      });
    }
    try {
      // const {data} = await axios.post(BASE_URL + "/auth/change-password", {
      // })
    } catch (error) {
      setError({
        status: true,
        message: error.response.data.message,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <AuthContainer>
      <section className="grid grid-cols-1 md:grid-cols-3 h-full gap-x-8  items-center">
        <section className="relative  col-span-1 w-full h-full hidden md:block"></section>
        {/* Sign Up Form  */}
        <section className="md:col-span-2 flex flex-col gap-y-6 md:w-[85%] lg:w-4/5">
          <section className="flex  flex-col gap-6">
            <AuthHeader content="Change Password" />
            <form onSubmit={handleSubmit} className="flex  flex-col gap-y-4">
              <div className="flex  flex-col gap-y-4">
                <AuthInput
                  onChange={handleChange}
                  name="password1"
                  id="password1"
                  type="password"
                  label="Enter New Password"
                  placeholder="Enter New Password..."
                  readOnly={changingPass}
                />

                <div className="flex flex-col gap-y-2">
                  <AuthInput
                    onChange={handleChange}
                    name="password2"
                    id="password2"
                    type="password"
                    label="Confirm Password"
                    placeholder="Enter Password..."
                    readOnly={changingPass}
                  />
                  {error?.status && error?.type === "not-matched-pass" && (
                    <ErrorMessage>{error.message}</ErrorMessage>
                  )}
                </div>
              </div>

              <SubmitBtn
                loading={changingPass}
                loadingTxt="Changing"
                notLoadingTxt="Submit"
              />
            </form>
          </section>
        </section>
      </section>
    </AuthContainer>
  );
};

export default ChangePassword;
