"use client";

import Image from "next/image";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Rating from "react-rating";

const MedicineCard = ({ data }) => {
  return (
    <div>
      <div className=" p-4 shadow rounded-md relative border">
        {/* image */}
        <Image
          className="w-[200px] h-[150px] mx-auto"
          src={data?.image}
          alt="card img"
          height={500}
          width={500}
        />
        <div className="space-y-3 mt-4">
          <div className="space-y-1">
            <h2 className="text-primary-text font-medium">{data?.name}</h2>
            <p className="flex items-center font-extrabold text-primary-text">
              <MdOutlineAttachMoney className="text-xl" />
              {data?.price}
            </p>
            {/* ratings */}
            <div>
              <Rating
                initialRating={data?.ratings ? data?.ratings : 2}
                emptySymbol={
                  <IoStarOutline className="text-2xl h-[24px] w-[25px] text-[#F9BF2D]" />
                }
                placeholderSymbol={
                  <IoStarOutline className="text-2xl h-[24px] w-[25px] text-[#F9BF2D]" />
                }
                fullSymbol={
                  <IoStar className="text-2xl h-[24px] w-[25px] text-[#F9BF2D]" />
                }
              />
            </div>
          </div>

          <button
            className="border-b-2 border-black pb-[2px]  hover:text-primary-text
           hover:border-primary-text"
          >
            View Details
          </button>
        </div>
        <div className="absolute top-2 left-3 flex gap-1">
          {data.popular ? (
            <h3 className="bg-yellow-600 rounded-full text-[10px] text-white w-fit px-2 py-0.5">
              POPULAR
            </h3>
          ) : null}

          {data.discount ? (
            <h3 className="bg-blue-500 rounded-full text-[10px] text-white w-fit px-2 py-0.5">
              SALE
            </h3>
          ) : null}
        </div>
        <h3></h3>
      </div>
    </div>
  );
};

export default MedicineCard;
