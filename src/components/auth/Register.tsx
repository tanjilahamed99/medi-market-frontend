"use client";
import axios from "axios";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import SubmitBtn from "@/components/shared/buttons/SubmitBtn";
import Link from "next/link";
import AuthInput from "./AuthInput";
import RememberMe from "./RememberMe";
import Socials from "./Socials";
import ConfirmOTP from "./ConfirmOTP";
import SignUpWithPassword from "./SignUpWithPassword";
import { BASE_URL } from "@/utils/url";
import { AxiosError } from "axios";
import ErrorMessage from "../shared/ErrorMessage";

const Register = ({ role }: any) => {
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

  if (session.status === "authenticated") {
    redirect("/");
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendOTP = async (e: any) => {
    e?.preventDefault();

    if (sendingOTP) return;

    setError({ status: false, message: "" });
    setSendingOTP(true);
    const { name, email }: any = userData || {};

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
        return setSendingOTP(false);
      }

      setSendingOTP(false);
      setError({ status: true, message: "Unable to send otp!" });
    } catch (err) {
      const error = err as AxiosError;
      setError({
        status: true,
        message: "",
      });
      setSendingOTP(false);
    }
  };

  const handleValidateOTP = async (e: any) => {
    e.preventDefault();
    if (confirmingOTP) return;

    setConfirmingOTP(true);
    setError({ status: false, message: "" });

    const { email, otp }: any = userData || {};
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
    } catch (err) {
      const error = err as AxiosError;
      console.log(error?.message);
      setError({ status: true, message: "" });
      setConfirmingOTP(false);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError({ status: false, message: "" });

    const { name, email, password1, password2 }: any = userData || {};

    if (password1 !== password2) {
      setLoading(false);
      return setError({
        status: true,
        // type: "not-matched-pass",
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
        redirect: false,
      });

      if (!response?.error) {
        redirect("/");
      }

      //   if (!response?.ok) {
      //     throw new Error("Network response was not ok!");
      //   }

      setLoading(false);
    } catch (err) {
      const error = err as AxiosError;
      setLoading(false);

      if (error.message !== "NEXT_REDIRECT") {
        setError({ status: true, message: "" });
      }
      console.log(error.message);
      redirect("/signin");
    }
  };

  return (
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
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
            error={error}
          />
        )}
        {role === "user" && <Socials />}
      </section>
    </section>
  );
};

function SendOTP({ sendingOTP, handleSendOTP, handleChange, error }: any) {
  return (
    <section className="flex  flex-col gap-6">
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
