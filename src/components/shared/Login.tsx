"use client";

import { BASE_URL } from "@/utils/url";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { AxiosError } from "axios";
import ErrorMessage from "./ErrorMessage";
import Link from "next/link";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const handleSubmit = async (e: any) => {
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
        redirect: false,
      });
      setLoading(false);

      if (!response?.ok) {
        throw new Error("Network response was not ok!");
      }
    } catch (err) {
      setLoading(false);
      setError({
        status: true,
        message: err?.response?.data?.message,
        type: err?.response?.data?.type,
      });
    }
  };

  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden  rounded-lg border-2 bg-white dark:border-zinc-700 dark:bg-zinc-900">
      <div className="w-full flex-col items-center overflow-hidden p-4 sm:p-8">
        {/* signin form */}
        <form
          onSubmit={handleSubmit}
          className={`h-full duration-300 space-y-3 sm:space-y-5`}
        >
          <h1 className="mb-3 uppercase sm:mb-5 sm:text-2xl">Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700"
            name="email"
          />
          {error?.status && error?.type === "not-found" && (
            <div className="flex  items-center gap-x-1">
              <ErrorMessage>{error?.message}</ErrorMessage>
            </div>
          )}
          <input
            type="password"
            placeholder="Password"
            className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700"
            name="password"
          />
          <p className="text-end text-sm text-zinc-600 dark:text-zinc-300">
            <a href="#" className="hover:underline">
              forget password?
            </a>
          </p>
          {/* button type will be submit for handling form submission*/}
          <button
            type="submit"
            className=" w-full block rounded-md border px-5 py-2 uppercase shadow-lg duration-200 hover:bg-zinc-400/10 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
