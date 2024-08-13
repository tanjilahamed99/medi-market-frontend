import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Socials = () => {
  return (
    <section className="-mt-4">
      <section className="divider  w-[80%] mx-auto   before:bg-gray-300 after:bg-gray-300 ">
        or
      </section>
      <section className="flex flex-col gap-y-4">
        <SocialLogin socialName="google" />
        <SocialLogin socialName="facebook" />
      </section>
    </section>
  );
};

function SocialLogin({ socialName }) {
  const imgMap = {
    google: {
      src: "/google.svg",
      alt: "Google Icon",
    },
    facebook: {
      src: "/facebook.svg",
      alt: "Facebook Icon",
    },
  };

  return (
    <div
      onClick={() => signIn(socialName)}
      className="border  cursor-pointer border-[#5F686F]  shadow-sm rounded-md flex py-2 px-4 items-center gap-x-3"
    >
      <Image {...(imgMap[socialName] || {})} height={32} width={32} />
      <p>{socialName[0].toUpperCase() + socialName.slice(1)}</p>
    </div>
  );
}

export default Socials;
