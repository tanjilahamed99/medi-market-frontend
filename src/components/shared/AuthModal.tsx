"use client";

import Image from "next/image";
import { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import Login from "./Login";
import Register from "./Register";

const AuthModal = () => {
  const [loginOpen, setLoginOpen] = useState(true);
  return (
    <div>
      <button
        className="mt-2"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <RxAvatar className="text-3xl font-semibold cursor-pointer" />
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="p-10">
            {loginOpen ? <Login /> : <Register />}

            {loginOpen ? (
              <p className="text-center mt-4">
                Don&apos;t have an account?
                <button
                  onClick={() => setLoginOpen(!loginOpen)}
                  type="button"
                  className="font-semibold underline"
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p className="text-center mt-4">
                Already have an account?
                <button
                  type="button"
                  onClick={() => setLoginOpen(!loginOpen)}
                  className="font-semibold underline"
                >
                  Sign in
                </button>
              </p>
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AuthModal;
