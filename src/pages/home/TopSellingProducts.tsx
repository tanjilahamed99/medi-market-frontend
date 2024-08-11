import MedicineCard from "@/components/shared/MedicineCard";
import SectionTitle from "@/components/shared/SectionTitle";
import Link from "next/link";

const TopSellingProducts = () => {
  const data = [
    {
      name: "Paracetamol",
      description: "Used to treat pain and reduce fever.",
      image: "https://i.ibb.co/q1fD6GC/pngwing-com-25.png",
      discount: "5%",
      review: ["Effective for pain relief.", "Works quickly to reduce fever."],
      quantity: "500mg, 10 tablets",
      ratings: "4.9",
      company: "Square Pharmaceuticals",
      type: "Painkiller",
      price: "1.00",
      popular: true,
    },
    {
      name: "Omeprazole",
      description:
        "Used to treat acid reflux, ulcers, and other stomach issues.",
      image: "https://i.ibb.co/v41p6C9/pngwing-com-24.png",
      discount: "10%",
      review: ["Great for reducing acidity.", "Provides quick relief."],
      quantity: "20mg, 10 capsules",
      ratings: "4.6",
      company: "Beximco Pharmaceuticals",
      type: "Antacid",
      price: "7.00",
      popular: true,
    },
    {
      name: "Napa",
      description: "Paracetamol used to treat pain and reduce fever.",
      image: "https://i.ibb.co/r7Ptchz/pngwing-com-28.png",
      discount: "5%",
      review: ["Effective for fever and pain.", "Safe for regular use."],
      quantity: "500mg, 10 tablets",
      ratings: "4.9",
      company: "Beximco Pharmaceuticals",
      type: "Painkiller",
      price: "1.00",
      popular: true,
    },
    {
      name: "Plant B",
      description: "Omeprazole used to treat acid reflux and stomach ulcers.",
      image: "https://i.ibb.co/DgWsK7m/pngwing-com-27.png",
      discount: "7%",
      review: ["Great for acid relief.", "Quickly alleviates discomfort."],
      quantity: "20mg, 10 capsules",
      ratings: "4.7",
      company: "Square Pharmaceuticals",
      type: "Antacid",
      price: "7.00",
      popular: true,
    },
    {
      name: "Fexo",
      description: "Fexofenadine used to treat allergy symptoms.",
      image: "https://i.ibb.co/vP2J4Z6/pngwing-com-31.png",
      discount: "6%",
      review: ["Effective for allergies.", "No drowsiness."],
      quantity: "120mg, 10 tablets",
      ratings: "4.6",
      company: "Incepta Pharmaceuticals",
      type: "Antihistamine",
      price: "6.00",
      popular: true,
    },
    {
      name: "Losectil",
      description: "Omeprazole used to reduce stomach acid and treat ulcers.",
      image: "https://i.ibb.co/pZvwJ0y/pngwing-com-32.png",
      discount: "8%",
      review: ["Works well for acidity.", "Good for long-term use."],
      quantity: "20mg, 10 capsules",
      ratings: "4.7",
      company: "Eskayef Pharmaceuticals",
      type: "Antacid",
      price: "6.50",
      popular: true,
    },
    {
      name: "Histacin",
      description:
        "Chlorpheniramine maleate used to treat allergic conditions.",
      image: "https://i.ibb.co/2F6vxCd/pngwing-com-29.png",
      discount: "5%",
      review: ["Good for colds and allergies.", "Works quickly."],
      quantity: "4mg, 10 tablets",
      ratings: "4.5",
      company: "Square Pharmaceuticals",
      type: "Antihistamine",
      price: "2.00",
      popular: true,
    },
    {
      name: "Napa Extend",
      description: "Extended-release Paracetamol for long-lasting pain relief.",
      image: "https://i.ibb.co/87W2mbJ/pngwing-com-33.png",
      discount: "6%",
      review: ["Lasts longer than regular Napa.", "Great for chronic pain."],
      quantity: "665mg, 10 tablets",
      ratings: "4.8",
      company: "Beximco Pharmaceuticals",
      type: "Painkiller",
      price: "3.00",
      popular: true,
    },
  ];
  return (
    <div className="my-20 px-2 lg:px-4 xl:px-0">
      <SectionTitle title="TOP SELLING PRODUCTS" />

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-6 mt-4">
        {data?.map((i, idx) => (
          <MedicineCard key={idx} data={i} />
        ))}
      </div>

      <div className="flex justify-end mt-5">
        <Link href={"/shop"}>
          <button className="btn btn-outline text-end">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default TopSellingProducts;
