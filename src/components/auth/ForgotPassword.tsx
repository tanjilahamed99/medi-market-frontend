"use client";
import React, { useState } from "react";
import AuthContainer from "../containers/AuthContainer";
import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import Link from "next/link";
import ErrorMessage from "../shared/error/ErrorMessage";
import SubmitBtn from "../shared/buttons/SubmitBtn";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { BASE_URL } from "@/constant/constant";
import toast from "react-hot-toast";
import axios from "axios";
import ConfirmOTP from "./ConfirmOTP";
import SignUpWithPassword from "./SignUpWithPassword";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [sendingOTP, setSendingOTP] = useState(false);
  const [confirmingOTP, setConfirmingOTP] = useState(false);
  const [userData, setUserData] = useState({});
  const [showOTPScreen, setShowOTPScreen] = useState(false);
  const [showPasswordScreen, setShowPasswordScreen] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });

  const showInitialScreen = !showOTPScreen && !showPasswordScreen;
  console.log(error);

  const session = useSession();
  const router = useRouter();

  if (session.status === "authenticated") {
    redirect("/");
  }

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
    const { email } = userData || {};

    if (!email) {
      setError({ status: true, message: "Email is required" });
      return setSendingOTP(false);
    }

    try {
      await axios.get(BASE_URL + `/auth/validate?email=${email}&action=signin`);

      const { data } = await axios.post(BASE_URL + "/auth/send-otp", {
        email,
        provider: "email/pass",
        type: "forgot-pass",
      });

      if (data?.success) {
        setShowOTPScreen(true);
        toast.success("OTP is sent!");
        return setSendingOTP(false);
      }

      setSendingOTP(false);
      setError({ status: true, message: "Unable to send otp!" });
    } catch (error) {
      console.log(error.message);
      setError({
        status: true,
        message: error?.response?.data?.message,
        type: error?.response?.data?.type,
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
    e?.preventDefault();
    const { password1, password2 } = userData || {};
    setLoading(true);
    setError({ status: false, message: "" });

    if (!password1 || !password2) {
      setLoading(false);
      return setError({
        status: true,
        message: "Please fill up all the fields",
      });
    }

    if (password1 !== password2) {
      setLoading(false);
      return setError({
        status: true,
        message: "Both password does not match!",
      });
    }

    try {
      const { data } = await axios.post(BASE_URL + "/auth/change-password", {
        email: userData?.email,
        password: userData?.password1,
        provider: "email/pass",
      });

      if (data?.success) {
        setLoading(false);
        return router.push("/signin");
      }

      setLoading(false);
      setError({ status: true, message: "Unable to change password" });
    } catch (error) {
      setLoading(false);
      setError({
        status: true,
        message: error?.response?.data?.message || "Unable to change password",
      });
    }
  };

  return (
    <AuthContainer>
      <section className="grid grid-cols-1 md:grid-cols-3 h-full gap-x-8  items-center">
        <section className="relative  col-span-1 w-full h-full hidden md:block"></section>

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
              isForgot
            />
          )}
          {showPasswordScreen && (
            <SignUpWithPassword
              email={userData?.email}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              loading={loading}
              error={error}
              isForgot
            />
          )}
        </section>
      </section>
    </AuthContainer>
  );
};

function SendOTP({ sendingOTP, handleSendOTP, handleChange, error }) {
  return (
    <section className="flex  flex-col gap-6">
      <AuthHeader content="Forgot Password" />
      <p className="text-xs w-[90%]">
        Enter your email id or mobile number and we’ll send you an access code
        via SMS.
      </p>
      <form onSubmit={handleSendOTP} className="flex  flex-col gap-y-4">
        <div className="flex  flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <AuthInput
              onChange={handleChange}
              name="email"
              id="email/otp"
              label="Enter mobile no / Email ID"
              placeholder="Enter mobile no / Email ID..."
              readOnly={sendingOTP}
            />
            {error?.status && (
              <div className="flex  items-center gap-x-1">
                <ErrorMessage>{error?.message}</ErrorMessage>
              </div>
            )}
          </div>
        </div>
        <SubmitBtn
          loading={sendingOTP}
          loadingTxt="Requesting access"
          notLoadingTxt="Request access"
        />
      </form>
    </section>
  );
}

export default ForgotPassword;
