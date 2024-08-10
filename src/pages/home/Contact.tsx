import React from "react";
import { FaLocationArrow, FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div className="my-10 flex justify-evenly items-center  flex-col lg:flex-row gap-5  md:p-10">
        <div className="lg:w-1/2 w-full p-5 lg:p-0 space-y-5">
          <h2 className="text-4xl font-semibold text-primary-text">
            Contact us for any enquiries or questions you may have
          </h2>
          <p className="text-primary-text text-sm">
            Welcome to the Medi Zone Contact Page! We’re dedicated to providing
            excellent customer service and are here to assist you with any
            questions, concerns, or feedback.Whether you have inquiries about
            our products, need help with an order, or want to share your
            experience with us, our team is eager to help.
          </p>
          <div className="space-y-2 font-light text-primary-text">
            <div className="flex gap-3  items-center hover:underline">
              <FaLocationArrow className=""></FaLocationArrow>
              <p> 25/6 Narsingdi,Bangladesh</p>
            </div>
            <div className="flex gap-3  items-center hover:underline">
              <FaMobile className=""></FaMobile>
              +880199999999
            </div>
            <div className="flex gap-3  items-center hover:underline">
              <MdEmail className=""></MdEmail>
              tanjil.ahamed0199@gmail.com
            </div>
          </div>
        </div>
        <div className="bg-primary-text lg:w-1/2 w-full md:p-20 p-4 rounded-2xl space-y-8">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="input border-none w-full text-bold text-black"
            />
            <hr className="w-full border border-white mt-1" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="input border-none w-full text-bold text-black"
            />
            <hr className="w-full border border-white mt-1" />
          </div>
          <div>
            <textarea
              className="textarea w-full text-black font-bold"
              placeholder="Add A Message"
            ></textarea>
            <hr className="w-full border border-white" />
          </div>
          <button className="btn btn-outline text-white w-full">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
