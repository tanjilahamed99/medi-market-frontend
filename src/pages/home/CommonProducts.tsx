import Image from "next/image";
import img1 from "../../../public/images/commonProducts/img-1.jpg";
import img2 from "../../../public/images/commonProducts/img-2.jpg";
import img3 from "../../../public/images/commonProducts/img-3.jpg";
import img4 from "../../../public/images/commonProducts/img-4.jpg";
import Link from "next/link";

const CommonProducts = () => {
  const cardData = [
    {
      img: img1,
      title: "Antacids ",
    },
    {
      img: img2,
      title: "Diuretics ",
    },
    {
      img: img3,
      title: "Corticosteroids",
    },
    {
      img: img4,
      title: "Bronchodilators",
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 grid-cols-1  md:grid-cols-2 items-center gap-5 my-5 p-2 md:p-0">
      {cardData?.map((i, idx) => (
        <div key={idx}>
          <div className="relative w-full h-[200px]">
            {/* Image */}
            <Image
              src={i?.img}
              alt="banner img"
              className="w-full h-full object-cover"
              height={600}
              width={600}
            />

            {/* Gradient Overlay with Text */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="flex justify-center text-center items-center bg-white/20 backdrop-blur-lg mx-auto px-10 py-5  rounded-lg">
                <div className="text-white">
                  <h2 className="font-bold">{i.title}</h2>
                  <Link className="hover:underline text-sm" href={"/"}>
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommonProducts;
