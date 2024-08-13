"use client";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";
import AuthInput from "../auth/AuthInput";
import ConfirmOTP from "../auth/ConfirmOTP";
import SignUpWithPassword from "../auth/SignUpWithPassword";
import Link from "next/link";
import SubmitBtn from "./buttons/SubmitBtn";
import ErrorMessage from "./ErrorMessage";
import { BASE_URL } from "@/utils/url";
import axios from "axios";
import { signIn } from "next-auth/react";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [sendingOTP, setSendingOTP] = useState(false);
  const [confirmingOTP, setConfirmingOTP] = useState(false);
  const [userData, setUserData] = useState({});
  const [showOTPScreen, setShowOTPScreen] = useState(false);
  const [showPasswordScreen, setShowPasswordScreen] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });
  const showInitialScreen = !showOTPScreen && !showPasswordScreen;

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

      console.log(data);

      if (data?.success) {
        setShowOTPScreen(true);
        // toast.success("OTP is sent!");
        return setSendingOTP(false);
      }

      setSendingOTP(false);
      setError({ status: true, message: "Unable to send otp!" });
    } catch (error) {
      setError({
        status: true,
        // message: error?.response?.data?.message,
        // type: error?.response?.data?.type,
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

    if (!email || !otp) {
      return setError({ status: true, message: "Email and OTP required" });
    }

    try {
      const { data } = await axios.post(BASE_URL + "/auth/verify-otp", {
        email,
        otp,
        provider: "email/pass",
      });

      if (data?.success) {
        setShowPasswordScreen(true);
        setShowOTPScreen(false);
      }
      setConfirmingOTP(false);
    } catch (error) {
      console.log(error?.message);
      setError({ status: true, message: error?.response?.data?.message });
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
        type: "not-matched-pass",
        message: "Password doesn't matched!",
      });
    }

    try {
      const { data } = await axios.post(BASE_URL + "/auth/register", {
        name,
        password: password1,
        email,
        role: "user",
        provider: "email/pass",
      });
      console.log(data);

      const response = await signIn("credentials", {
        email,
        password: password1,
        role: "user",
      });

      console.log(response);

      setLoading(false);
    } catch (err) {
      setLoading(false);

      if (err.message !== "NEXT_REDIRECT") {
        setError({ status: true, message: err?.response?.data?.message });
      }
      console.log(err.message);
    }
  };

  return (
    <div className="">
      <section className="">
        {/* Sign Up Form  */}
        <section className="md:col-span-2 flex  flex-col gap-6">
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
        </section>
      </section>
    </div>
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
              label="Email ID"
              placeholder="Email ID..."
              readOnly={sendingOTP}
            />
            {error?.status && error?.type === "registered" && (
              <div className="flex  items-center gap-x-1">
                <ErrorMessage>{error.message}</ErrorMessage>
                <Link
                  className="underline text-black text-xs font-semibold"
                  href="/"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>

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
