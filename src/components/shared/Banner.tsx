"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// images
import img1 from "../../../public/images/banner/img-1.jpg";
// import img2 from "../../../public/images/banner/img-2.jpeg";
// import img3 from "../../../public/images/banner/img-3.jpeg";
import img4 from "../../../public/images/banner/img-4.jpg";
import img5 from "../../../public/images/banner/img-5.jpg";
import img2 from "../../../public/images/banner/freestocks-nss2eRzQwgw-unsplash.jpg";
import img3 from "../../../public/images/banner/simone-van-der-koelen-lSYvRWrNR5U-unsplash.jpg";
import Image from "next/image";

const Banner = () => {
  const sliderData = [
    {
      img: img1,
      text: "Your Health, Our Priority",
      desc: "Medizone delivers trusted, high-quality medicines to your door, ensuring easy access to healthcare for all. Prioritize your wellness with our convenient, reliable service, designed to keep you healthy",
    },
    {
      img: img2,
      text: "Delivering Wellness to Your Doorstep",
      desc: "At Medizone, we simplify healthcare by offering top-quality medicines delivered fast. Your health matters, and we’re here to support it with convenience and care",
    },
    {
      img: img3,
      text: "Trusted Care for Every Family",
      desc: "Medizone brings healthcare to you, offering a seamless shopping experience for essential medicines. Trust us to deliver the best products, putting your health first.",
    },
    {
      img: img4,
      text: "Medicine Made Accessible, Anytime",
      desc: "Medizone is your partner in health, providing easy access to top medicines. We’re dedicated to supporting your well-being with convenience and reliability.",
    },
    {
      img: img5,
      text: "Empowering Health, One Click Awa",
      desc: "Medizone ensures your health needs are met with ease, delivering trusted medicines to your home. Convenient, reliable, and committed to your well-being.",
    },
  ];

  return (
    <div className="my-5">
      {" "}
      <Swiper modules={[Navigation]} navigation={true} className="mySwiper">
        {sliderData?.map((i, idx) => (
          <SwiperSlide className="relative" key={idx}>
            <div className="relative w-full h-[400px] md:h-[400px] lg:h-[500px]  xl:h-[600px]">
              {/* Image */}
              <Image
                src={i?.img}
                alt="banner img"
                className="w-full h-full object-cover"
                height={600}
                width={1200}
              />

              {/* Gradient Overlay with Text */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center">
                <div className="lg:w-2/3 h-full bg-gradient-to-r from-black/80 to-transparent gap-2 flex flex-col justify-center items-start md:pl-20 pl-5">
                  <div className="lg:w-2/3 lg:space-y-3">
                    <h2 className="text-white text-2xl lg:text-5xl font-semibold lg:leading-[60px]">
                      *{i.text}*
                    </h2>
                    <h2 className="text-white font-medium leading-7">
                      {i.desc}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
