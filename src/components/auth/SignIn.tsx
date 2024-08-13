"use client";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import SignOutBtn from "../shared/buttons/SignOutBtn";
import AuthInput from "./AuthInput";
import ErrorMessage from "../shared/error/ErrorMessage";
import SubmitBtn from "../shared/buttons/SubmitBtn";
import RememberMe from "./RememberMe";
import AuthHeader from "./AuthHeader";
import Link from "next/link";
import axios from "axios";
import { BASE_URL } from "@/constant/constant";
import Socials from "./Socials";
import AuthContainer from "../containers/AuthContainer";

export const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const session = useSession();

  if (session.status === "authenticated") {
    // redirect("/" + session?.data?.user?.role);
    redirect("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({ status: false, message: "" });

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await axios.get(BASE_URL + `/auth/validate?email=${email}&action=signin`);

      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        // redirect: false,
      });

      if (!response?.error) {
        redirect("/");
      }

      setLoading(false);
      redirect("/signin");

      //   if (!response?.ok) {
      //     throw new Error("Network response was not ok!");
      //   }
    } catch (err) {
      setLoading(false);
      // console.log(err.message);
      setError({
        status: true,
        message: err?.response?.data?.message,
        type: err?.response?.data?.type,
      });
      // redirect("/signin");
    }
  };

  return (
    <AuthContainer>
      <section className="grid grid-cols-1 md:grid-cols-3 h-full gap-x-8  items-center">
        <section className="relative  col-span-1 w-full h-full hidden md:block"></section>
        {/* Login Form  */}

        <section className="md:col-span-2 flex md:w-[85%] lg:w-4/5  flex-col gap-6">
          <AuthHeader content="Sign in" />
          <form onSubmit={handleSubmit} className="flex  flex-col gap-y-4">
            <div className="flex  flex-col gap-y-4">
              <div className="flex flex-col gap-y-2">
                <AuthInput
                  id="email"
                  name="email"
                  label="Email"
                  placeholder="Email..."
                />
                {error?.status && error?.type === "not-found" && (
                  <div className="flex  items-center gap-x-1">
                    <ErrorMessage>{error.message}</ErrorMessage>
                    <Link
                      className="underline text-black  text-xs font-semibold"
                      href="/signin"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
              <AuthInput
                name="password"
                id="password"
                type="password"
                label="Password"
                placeholder="Password..."
              />
            </div>
            <div className="flex justify-between items-center">
              <RememberMe />
              <Link href="/" className="font-medium underline text-sm">
                Forgot password?
              </Link>
            </div>
            <SubmitBtn
              loading={loading}
              loadingTxt="Signing in"
              notLoadingTxt="Login"
            />
          </form>
          <p className="text-sm flex gap-x-1  justify-center ">
            Don't you have an account?
            <Link href="/user/register" className="text-cyan underline ">
              Sign up
            </Link>
          </p>
          <Socials />
        </section>
      </section>
    </AuthContainer>
  );

  // return (
  //   <section className="w-screen h-screen p-4 text-black bg-white">
  //     <form action="" onSubmit={handleSubmit} className="flex flex-col gap-y-4">
  //       <input
  //         type="email"
  //         name="email"
  //         required
  //         placeholder="Email"
  //         className="w-2/3 px-2 py-2 border"
  //       />
  //       <input
  //         type="password"
  //         name="password"
  //         required
  //         min={8}
  //         placeholder="Password"
  //         className="w-2/3 px-2 py-2 border"
  //       />
  //       <button className="px-2 py-2 text-white bg-black w-fit">Submit</button>
  //     </form>
  //     <SignOutBtn />
  //   </section>
  // );
};

export default SignIn;
