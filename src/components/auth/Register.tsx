"use client";
import axios from "axios";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { BASE_URL } from "@/constant/constant";
import Input from "@/components/shared/inputs/Input";
import Image from "next/image";
import YellowBtn from "@/components/shared/buttons/YellowBtn";
import { ImSpinner10 } from "react-icons/im";
import SubmitBtn from "@/components/shared/buttons/SubmitBtn";
import ErrorMessage from "../shared/error/ErrorMessage";
import Link from "next/link";
import AuthInput from "./AuthInput";
import AuthHeader from "./AuthHeader";
import RememberMe from "./RememberMe";
import Socials from "./Socials";
import toast from "react-hot-toast";
import ConfirmOTP from "./ConfirmOTP";
import SignUpWithPassword from "./SignUpWithPassword";
import AuthContainer from "../containers/AuthContainer";

const Register = ({ role }) => {
  const [loading, setLoading] = useState(false);
  const [sendingOTP, setSendingOTP] = useState(false);
  const [confirmingOTP, setConfirmingOTP] = useState(false);
  const [userData, setUserData] = useState({});
  const [showOTPScreen, setShowOTPScreen] = useState(false);
  const [showPasswordScreen, setShowPasswordScreen] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });

  const showInitialScreen = !showOTPScreen && !showPasswordScreen;

  const session = useSession();

  // console.log(session);

  // if (session.status === "authenticated") {
  //   redirect("/");
  // }

  console.log(error);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendOTP = async (e) => {
    e?.preventDefault();

    if (sendingOTP) return;

    setError({ status: false, message: "" });
    setSendingOTP(true);
    const { name, email } = userData || {};

    if (!name || !email) {
      setError({ status: true, message: "Name or Email is required" });
      return setSendingOTP(false);
    }

    try {
      await axios.get(
        BASE_URL + `/auth/validate?email=${email}&action=register`
      );

      const { data } = await axios.post(BASE_URL + "/auth/send-otp", {
        name,
        email,
        provider: "email/pass",
      });

      if (data?.success) {
        setShowOTPScreen(true);
        toast.success("OTP is sent!");
        return setSendingOTP(false);
      }

      setSendingOTP(false);
      setError({ status: true, message: "Unable to send otp!" });
    } catch (error) {
      setError({
        status: true,
        message: error.response.data.message,
        type: error.response.data.type,
      });
      setSendingOTP(false);
    }
  };

  const handleValidateOTP = async (e) => {
    e.preventDefault();
    if (confirmingOTP) return;

    setConfirmingOTP(true);
    setError({ status: false, message: "" });

    const { email, otp } = userData || {};
    console.log(otp);

    if (!email || !otp) {
      return setError({ status: true, message: "Email and OTP required" });
    }

    try {
      const { data } = await axios.post(BASE_URL + "/auth/verify-otp", {
        email,
        otp,
        provider: "email/pass",
      });

      if (data.success) {
        setShowPasswordScreen(true);
        setShowOTPScreen(false);
      }

      setConfirmingOTP(false);
    } catch (error) {
      console.log(error?.message);
      setError({ status: true, message: error.response.data.message });
      setConfirmingOTP(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError({ status: false, message: "" });

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    const { name, email, password1, password2 } = userData || {};

    if (password1 !== password2) {
      setLoading(false);
      return setError({
        status: true,
        type: "not-matched-pass",
        message: "Password doesn't matched!",
      });
    }

    try {
      const { data } = await axios.post(BASE_URL + "/auth/register", {
        name,
        password: password1,
        email,
        role,
        provider: "email/pass",
      });

      const response = await signIn("credentials", {
        email,
        password: password1,
        role,
      });

      if (!response?.error) {
        redirect("/");
      }

      //   if (!response?.ok) {
      //     throw new Error("Network response was not ok!");
      //   }

      setLoading(false);
    } catch (err) {
      setLoading(false);

      if (err.message !== "NEXT_REDIRECT") {
        setError({ status: true, message: err?.response?.data?.message });
      }
      console.log(err.message);
      redirect("/signin");
    }
  };

  const handleGoogle = async () => {
    try {
      signIn("google");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <AuthContainer>
      <section className="grid grid-cols-1 md:grid-cols-3 h-full gap-x-8  items-center">
        <section className="relative  col-span-1 w-full h-full hidden md:block"></section>
        {/* Sign Up Form  */}
        <section className="md:col-span-2 flex flex-col gap-y-6 md:w-[85%] lg:w-4/5">
          {showInitialScreen && (
            <SendOTP
              sendingOTP={sendingOTP}
              handleSendOTP={handleSendOTP}
              handleChange={handleChange}
              error={error}
            />
          )}
          {showOTPScreen && (
            <ConfirmOTP
              confirmingOTP={confirmingOTP}
              sendingOTP={sendingOTP}
              handleValidateOTP={handleValidateOTP}
              handleChange={handleChange}
              handleSendOTP={handleSendOTP}
              error={error}
            />
          )}
          {showPasswordScreen && (
            <SignUpWithPassword
              email={userData?.email}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              loading={loading}
              error={error}
            />
          )}
          {role === "user" && <Socials />}
        </section>
      </section>
    </AuthContainer>
  );
};

function SendOTP({ sendingOTP, handleSendOTP, handleChange, error }) {
  return (
    <section className="flex  flex-col gap-6">
      <AuthHeader content="Sign up using" />
      <form onSubmit={handleSendOTP} className="flex  flex-col gap-y-4">
        <div className="flex  flex-col gap-y-4">
          <AuthInput
            onChange={handleChange}
            id="name"
            name="name"
            label="Name"
            placeholder="Name..."
            readOnly={sendingOTP}
          />

          <div className="flex flex-col gap-y-2">
            <AuthInput
              onChange={handleChange}
              name="email"
              id="email/otp"
              label="Enter mobile no / Email ID"
              placeholder="Enter mobile no / Email ID..."
              readOnly={sendingOTP}
            />
            {error?.status && error?.type === "registered" && (
              <div className="flex  items-center gap-x-1">
                <ErrorMessage>{error.message}</ErrorMessage>
                <Link
                  className="underline text-black text-xs font-semibold"
                  href="/signin"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
        <RememberMe />
        <SubmitBtn
          loading={sendingOTP}
          loadingTxt="Sending"
          notLoadingTxt="Send OTP"
        />
      </form>
    </section>
  );
}

export default Register;

{
  /* <section className="w-[90%] mx-auto sm:w-[80%]  md:w-[70%] lg:w-[65%]">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 "
        >
          <Input
            name="name"
            required
            placeholder="Name"
            className="w-2/3 px-2 py-2 border"
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="w-2/3 px-2 py-2 border"
            onChange={handleChange}
          />

          {showOTPScreen && (
            <Input
              type="number"
              name="otp"
              required
              min={8}
              placeholder="OTP"
              className="w-2/3 px-2 py-2 border"
              onChange={handleChange}
            />
          )}

          {showPasswordScreen && (
            <Input
              type="password"
              name="password"
              required
              min={8}
              placeholder="Password"
              className="w-2/3 px-2 py-2 border"
              onChange={handleChange}
            />
          )}

          <button
            type={
              (!showOTPScreen && !showPasswordScreen) || showOTPScreen
                ? "button"
                : "submit"
            }
            onClick={
              !showOTPScreen && !showPasswordScreen
                ? handleSendOTP
                : showOTPScreen
                ? handleValidateOTP
                : ""
            }
            className="px-2 py-2 text-white bg-black w-fit"
          >
            {showOTPScreen && "Confirm OTP"}
            {showPasswordScreen && "Submit"}
            {!showOTPScreen && !showPasswordScreen && "Send OTP"}
          </button>
        </form>
        <button
          onClick={handleGoogle}
          className="px-2 py-2 text-black border border-black bg-white w-fit"
        >
          Google
        </button>
        <button
          onClick={() => signIn("facebook")}
          className="px-2 py-2 text-black border border-black bg-white w-fit"
        >
          Facebook
        </button>
      </section>  */
}
