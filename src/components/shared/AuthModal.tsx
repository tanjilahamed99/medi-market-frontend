"use client";
import { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import Login from "./Login";
import Register from "./Register";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

const AuthModal = () => {
  const [loginOpen, setLoginOpen] = useState(true);
  const { data: user, status } = useSession();
  const openModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      (modal as HTMLDialogElement).showModal();
    }
  };

  return (
    <div>
      <button className="mt-2" onClick={openModal}>
        {status === "authenticated" ? (
          <div>
            {user?.user?.image?.includes("https") ? (
              <Image
                src={user?.user?.image}
                alt="profile image"
                width={500}
                height={500}
                className="rounded-full w-10"
              />
            ) : (
              <RxAvatar className="text-4xl" />
            )}
          </div>
        ) : (
          <RxAvatar className="text-4xl" />
        )}
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          {user ? (
            <div className="space-y-3">
              <h2>{user?.user?.name}</h2>
              <h2>{user?.user?.email}</h2>
              <button
                className="btn border border-red-700"
                onClick={() => signOut()}
              >
                signOut
              </button>
            </div>
          ) : (
            <div className="md:p-10">
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
          )}
        </div>
      </dialog>
    </div>
  );
};

export default AuthModal;
