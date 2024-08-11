import Image from "next/image";
import React from "react";
import img from "../../../public/images/welcome/welcome.jpg";

const Welcome = () => {
  return (
    <div className="my-10 flex justify-evenly items-center  flex-col lg:flex-row gap-5  md:p-10">
      <div className="lg:w-1/2 w-full  rounded-2xl space-y-8">
        <div className="relative  md:h-[400px]">
          {/* Image */}
          <Image
            src={img}
            alt="banner img"
            className="w-full h-full object-cover"
            height={600}
            width={600}
          />

          {/* Gradient Overlay with Text */}
          <div className="absolute top-0 left-0 w-full h-full md:flex items-center justify-center hidden">
            <div className="flex justify-center w-1/2 text-center items-center bg-white/10 backdrop-blur-lg mx-auto px-10 py-5  rounded-lg">
              <div className="text-white space-y-2">
                <h2 className="font-bold text-xl">Transfer Prescription</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed
                  do eiusm.
                </p>
                <button className="border-b p-1 border-b-white">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full p-2 md:p-10 space-y-3 md:space-y-5 bg-[#FFF8F1] md:h-[400px]">
        <h2 className=" text-3xl xl:text-4xl font-semibold text-primary-text">
          Welcome to Medi Zone pharmacy we offer the best practices.
        </h2>
        <p className="text-primary-text text-sm">
          Welcome to the Medi Zone Contact Page! We’re dedicated to providing
          excellent customer service and are here to assist you with any
          questions, concerns, or feedback.Whether you have inquiries about our
          products, need help with an order, or want to share your experience
          with us, our team is eager to help.
        </p>
        <button className="bg-yellow-600 rounded-md text-white px-3 py-2">
          FIND MORE
        </button>
      </div>
    </div>
  );
};

export default Welcome;
