"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SignOutBtn = () => {
  return (
    <button className="bg-black text-white px-2 py-2" onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export default SignOutBtn;
