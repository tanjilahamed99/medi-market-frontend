"use client";

import Image from "next/image";
import logo from "../../../public/images/navbar/web-logo.png";
import Link from "next/link";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const handleClick = () => {
    window.location.href = "mailto:tanjil.ahamed0199@gmail.com";
  };

  return (
    <div className="">
      {/* navbar row 1 */}
      <div className="navbar">
        <div className="navbar-start gap-2 items-center w-1/3">
          <Image src={logo} alt="logo" className="h-16 w-16" />
          <div className="">
            <Link
              href={"/"}
              className="text-2xl leading-3 font-semibold text-primary-text"
            >
              MediZone
            </Link>
            <h4 className="font-medium text-primary-text">safe life</h4>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex w-1/3">
          <label className="input input-bordered flex items-center gap-2 rounded-full">
            <input type="text" className="grow " placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="navbar-end w-1/3 flex items-center justify-between">
          <h2
            onClick={handleClick}
            className="cursor-pointer text-primary-text"
          >
            tanjil.ahamed0199@gmail.com
          </h2>
          <div className="flex items-center gap-5">
            <RxAvatar className="text-2xl font-semibold cursor-pointer" />
            <FaHeart className="text-2xl font-semibold cursor-pointer" />
            <MdOutlineShoppingBag className="text-2xl font-semibold cursor-pointer" />
          </div>
        </div>
      </div>

      <hr className="border my-4" />
      {/* navbar row 2 */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-primary-text text-lg">
            Categories
          </h2>
          <FaBars className="cursor-pointer" />
        </div>
        {/* nav links */}
        <div>
          <ul className="flex items-center gap-5 text-primary-text font-semibold">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/"}>
              <li>Medical Supplies</li>
            </Link>

            <Link href={"/"}>
              {" "}
              <li>SHOP</li>
            </Link>

            <Link href={"/"}>
              {" "}
              <li>BLOG</li>
            </Link>
          </ul>
        </div>
        <button className="bg-yellow-600 text-white py-2 px-4 rounded-lg">
          Contact US
        </button>
      </div>
    </div>
  );
};

export default Navbar;
