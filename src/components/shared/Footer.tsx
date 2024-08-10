import Image from "next/image";
import logo from "../../../public/images/navbar/web-logo.png";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#10235e] p-10 text-white">
        <aside className="flex items-center">
          <Image src={logo} alt="logo" className="w-10 h-10" />
          <div>
            <p className="text-lg">MEDIZONE</p>
            <h4 className="font-light">SAFE LIFE</h4>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title text-white">About us</h6>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Pricing US</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Browse</h6>
          <a className="link link-hover">Apothecary</a>
          <a className="link link-hover">Beauty</a>
          <a className="link link-hover">skincare</a>
          <a className="link link-hover">Beauty</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Working Hours</h6>
          <a className="">Mon - Fri: 09:00 - 22:00</a>
          <a className="">Sat: 09:00 - 17:00</a>
          <a className="">Sun: Closed</a>
          <div className="flex  gap-3">
            <Link className="" href={"/"}>
              <GrFacebookOption className="text-2xl bg-yellow-600 rounded-full p-1 hover:border-white hover:border hover:bg-[#10235e]" />
            </Link>
            <Link className="" href={"/"}>
              <FaInstagram className="text-2xl bg-yellow-600 rounded-full p-1 hover:border-white hover:border hover:bg-[#10235e]" />
            </Link>
            <Link className="" href={"/"}>
              <CiTwitter className="text-2xl bg-yellow-600 rounded-full p-1 hover:border-white hover:border hover:bg-[#10235e]" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
