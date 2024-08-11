"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import Rating from "react-rating";

const ProductDetailsForm = ({ id }: any) => {
  const [data, setData] = useState({});

  console.log(data);
  const datas = [
    {
      name: "Aspirin",
      description: "Used to reduce pain, fever, or inflammation.",
      image: "https://i.ibb.co/VWSy6jJ/img1.png",
      discount: "10%",
      review: ["Works well!", "Very effective."],
      quantity: "50",
      ratings: "4.5",
      company: "PharmaCo",
      type: "Painkiller",
      price: "10.99",
      popular: true,
      _id: "4565465466546",
    },
    {
      name: "Amoxicillin",
      description: "Antibiotic used to treat bacterial infections.",
      image: "https://i.ibb.co/MPh6Qwh/pngwing-com-24.png",
      discount: "5%",
      review: ["Cleared my infection quickly.", "No side effects."],
      quantity: "30",
      ratings: "4.7",
      company: "MediLife",
      type: "Antibiotic",
      price: "15.49",
      popular: false,
      _id: "6546456456",
    },
    {
      name: "Cetirizine",
      description: "Used to relieve allergy symptoms.",
      image: "https://i.ibb.co/y0FwWvh/pngwing-com-25.png",
      discount: "15%",
      review: ["Stopped my sneezing in no time.", "Great for allergies."],
      quantity: "100",
      ratings: "2",
      company: "AllerGen",
      type: "Antihistamine",
      price: "8.99",
      popular: true,
      _id: "6546456456456",
    },
    {
      name: "Ibuprofen",
      description:
        "Nonsteroidal anti-inflammatory drug (NSAID) used for pain relief and fever reduction.",
      image: "https://i.ibb.co/7gddN5F/pngwing-com-26.png",
      discount: "",
      review: ["Helps with my headaches.", "Good for reducing inflammation."],
      quantity: "100",
      ratings: "4.6",
      company: "PainRelief Co.",
      type: "Painkiller",
      price: "9.99",
      popular: true,
      _id: "6546456456456",
    },
    {
      name: "Bisolvon",
      description:
        "Medication used to treat type 2 diabetes by controlling blood sugar levels.",
      image: "https://i.ibb.co/Bjyryb1/pngwing-com-30.png",
      discount: "8%",
      review: [
        "Effective in managing my blood sugar.",
        "No major side effects.",
      ],
      quantity: "60",
      ratings: "4.4",
      company: "GlucoseCare",
      type: "Antidiabetic",
      price: "12.79",
      popular: true,
      _id: "65645645645645654",
    },
    {
      name: "Omeprazole",
      description:
        "Proton pump inhibitor used to treat acid reflux and ulcers.",
      image: "https://i.ibb.co/bLGDnr4/pngwing-com-27.png",
      discount: "10%",
      review: ["Relieved my acid reflux quickly.", "Good for long-term use."],
      quantity: "40",
      ratings: "4.3",
      company: "StomachCare",
      type: "Antacid",
      price: "11.29",
      popular: false,
      _id: "6546456546456",
    },
    {
      name: "Lisinopril",
      description:
        "ACE inhibitor used to treat high blood pressure and heart failure.",
      image: "https://i.ibb.co/r7Ptchz/pngwing-com-28.png",
      discount: "",
      review: ["Keeps my blood pressure in check.", "Minimal side effects."],
      quantity: "90",
      ratings: "4.5",
      company: "HeartHealth",
      type: "Antihypertensive",
      price: "14.49",
      popular: true,
      _id: "6546546456546456",
    },
    {
      name: "Paracetamol",
      description: "Commonly used to treat pain and reduce fever.",
      image: "https://i.ibb.co/r7bJDxY/pngwing-com-29.png",
      discount: "10%",
      review: ["Very effective for headaches.", "Quickly reduces fever."],
      quantity: "50",
      ratings: "3",
      company: "HealthCorp",
      type: "Painkiller",
      price: "6.99",
      _id: "8936583456837",
    },
  ];

  useEffect(() => {
    const find = datas.find((item) => item._id === id);
    setData({ ...find });
  }, [id]);

  return (
    <div className="flex items-start my-10 gap-5">
      {/* left site */}
      <div className="border shadow w-[500px] relative">
        <Image
          src={data.image}
          alt="image"
          className="mx-auto p-10"
          height={500}
          width={500}
        />
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
      </div>
      {/* right site */}
      <div className="w-1/2">
        {" "}
        <div className="space-y-3 mt-4">
          <div className="space-y-1">
            <h2 className="text-primary-text font-medium">{data?.name}</h2>
            <p className="flex items-center font-extrabold text-primary-text">
              <MdOutlineAttachMoney className="text-xl" />
              {data?.price}
            </p>
            {/* ratings */}
            <div className="flex items-center gap-3">
              <Rating
                initialRating={data?.ratings ? data?.ratings : 2}
                emptySymbol={
                  <IoStarOutline className="text-xl h-[24px] w-[25px] text-[#F9BF2D]" />
                }
                placeholderSymbol={
                  <IoStarOutline className="text-xl h-[24px] w-[25px] text-[#F9BF2D]" />
                }
                fullSymbol={
                  <IoStar className="text-xl h-[24px] w-[25px] text-[#F9BF2D]" />
                }
              />

              <h3 className="text-primary-text font-semibold">
                ( {data?.review?.length} customer review)
              </h3>
            </div>

            {/* <p>{data?.description}</p> */}
            <p>
              Morbi aliquam odio erat, eu varius sapien rhoncus sit amet. In
              blandit nunc non nibh cursus, a bibendum ipsum condimentum.
              Aliquam euismod vehicula neque. Sed sit amet dolor pulvinar,
              aliquet sapien a, auctor turpis. Praesent aliquam vel sem sit amet
              ullamcorper. In sed justo neque. Nam semper erat nec volutpat
              pellentesque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsForm;
