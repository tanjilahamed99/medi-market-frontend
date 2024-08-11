import MedicineCard from "@/components/shared/MedicineCard";
import SectionTitle from "@/components/shared/SectionTitle";

const FeaturedProducts = () => {
  const data = [
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
    },
  ];

  return (
    <div className="my-20 px-2 lg:px-4 xl:px-0">
      <SectionTitle title="Featured Products" />

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-6 mt-4">
        {data?.map((i, idx) => (
          <MedicineCard key={idx} data={i} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
