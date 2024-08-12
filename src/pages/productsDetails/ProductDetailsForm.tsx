"use client";

import SectionTitle from "@/components/shared/SectionTitle";
import { useGetSingleProductsQuery } from "@/redux/rtk/fetchData";
import Image from "next/image";
import { useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import Rating from "react-rating";

interface ProductDetailsFormProps {
  id: string;
}

const ProductDetailsForm: React.FC<ProductDetailsFormProps> = ({ id }) => {
  const { data, error } = useGetSingleProductsQuery(id);
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const handleSubmit = () => {};

  if (!data) {
    return (
      <div className="flex items-center">
        <span className="loading loading-ring  h-[300px] w-[10%] mx-auto"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-start my-10 gap-5">
        {/* Left side */}
        <div className="border shadow w-[500px] relative">
          <Image
            src={data?.product?.image}
            alt="image"
            className="mx-auto p-10"
            height={500}
            width={500}
          />
          <div className="absolute top-2 left-3 flex gap-1">
            {data?.product?.popular && (
              <h3 className="bg-yellow-600 rounded-full text-[10px] text-white w-fit px-2 py-0.5">
                POPULAR
              </h3>
            )}

            {data?.product?.discount && (
              <h3 className="bg-blue-500 rounded-full text-[10px] text-white w-fit px-2 py-0.5">
                SALE
              </h3>
            )}
          </div>
        </div>
        {/* Right side */}
        <div className="w-1/2 space-y-5 mt-4">
          <div className="space-y-1">
            <h2 className="text-primary-text font-medium">
              {data?.product?.name}
            </h2>
            <p className="flex items-center font-extrabold text-primary-text">
              <MdOutlineAttachMoney className="text-xl" />
              {data?.product?.price}
            </p>
            {/* Ratings */}
            <div className="flex items-center gap-3">
              <Rating
                initialRating={data?.product?.ratings || 2}
                emptySymbol={
                  <IoStarOutline className="text-xl h-[24px] w-[25px] text-[#F9BF2D]" />
                }
                fullSymbol={
                  <IoStar className="text-xl h-[24px] w-[25px] text-[#F9BF2D]" />
                }
              />
              <h3 className="text-primary-text font-semibold">
                ({data?.product?.review?.length} customer reviews)
              </h3>
            </div>
            {/* <p>{data.description}</p> */}
            <p>
              Morbi aliquam odio erat, eu varius sapien rhoncus sit amet. In
              blandit nunc non nibh cursus, a bibendum ipsum condimentum.
              Aliquam euismod vehicula neque. Sed sit amet dolor pulvinar,
              aliquet sapien a, auctor turpis. Praesent aliquam vel sem sit amet
              ullamcorper. In sed justo neque. Nam semper erat nec volutpat
              pellentesque.
            </p>
          </div>

          <div className="flex  items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={handleDecrease}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={handleInputChange}
                className="w-12 text-center border border-gray-300 rounded no-spinner"
                min="1"
              />
              <button
                onClick={handleIncrease}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-yellow-600 text-white py-2 px-5 rounded-md"
            >
              Add to card
            </button>
          </div>

          <div className="space-y-1">
            <h2 className="text-primary-text font-medium">
              Category : {data?.product?.type}
            </h2>
            <h2 className="text-primary-text font-medium">
              Company : {data?.product?.company}
            </h2>
            <h2></h2>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-primary-text font-semibold text-2xl ">
          Description
        </h2>

        <p className="mt-2 text-primary-text">
          Morbi aliquam odio erat, eu varius sapien rhoncus sit amet. In blandit
          nunc non nibh cursus, a bibendum ipsum condimentum. Aliquam euismod
          vehicula neque. Sed sit amet dolor pulvinar, aliquet sapien a, auctor
          turpis. Praesent aliquam vel sem sit amet ullamcorper. In sed justo
          neque. Nam semper erat nec volutpat pellentesque. Morbi aliquam odio
          erat, eu varius sapien rhoncus sit amet. In blandit nunc non nibh
          cursus, a bibendum ipsum condimentum. Aliquam euismod vehicula neque.
          Sed sit amet dolor pulvinar, aliquet sapien a, auctor turpis. Praesent
          aliquam vel sem sit amet ullamcorper. In sed justo neque. Nam semper
          erat nec volutpat pellentesque.
        </p>

        <div className="grid grid-cols-2 items-center w-1/2 gap-2 mt-5 text-primary-text">
          <li>Fast-Acting Relief</li>
          <li>Long-Lasting Effect</li>
          <li>Doctor-Recommended Formula</li>
          <li>Non-Drowsy Formula</li>
          <li>Easy-to-Swallow</li>
          <li>Rapid Absorption</li>
          <li>Allergy-Friendly</li>
          <li>Gentle on Stomach</li>
          <li>Prescription-Strength</li>
        </div>
      </div>

      <div className="mt-16">
        <SectionTitle title="Related Products" />
      </div>
    </div>
  );
};

export default ProductDetailsForm;
