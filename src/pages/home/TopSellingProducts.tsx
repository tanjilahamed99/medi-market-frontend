import MedicineCard from "@/components/shared/MedicineCard";
import SectionTitle from "@/components/shared/SectionTitle";

const TopSellingProducts = () => {
  const data = [
    {
      name: "Aspirin",
      description: "Used to reduce pain, fever, or inflammation.",
      image: "",
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
      image: "",
      discount: "5%",
      review: ["Cleared my infection quickly.", "No side effects."],
      quantity: "30",
      ratings: "4.7",
      company: "MediLife",
      type: "Antibiotic",
      price: "15.49",
      popular: true,
    },
    {
      name: "Cetirizine",
      description: "Used to relieve allergy symptoms.",
      image: "",
      discount: "15%",
      review: ["Stopped my sneezing in no time.", "Great for allergies."],
      quantity: "100",
      ratings: "4.2",
      company: "AllerGen",
      type: "Antihistamine",
      price: "8.99",
      popular: true,
    },
    {
      name: "Ibuprofen",
      description:
        "Nonsteroidal anti-inflammatory drug (NSAID) used for pain relief and fever reduction.",
      image: "",
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
      name: "Metformin",
      description:
        "Medication used to treat type 2 diabetes by controlling blood sugar levels.",
      image: "",
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
      image: "",
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
      image: "",
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
      name: "Cetirizine",
      description: "Antihistamine used to treat allergy symptoms.",
      image: "",
      discount: "5%",
      review: ["Stops my sneezing.", "Great for hay fever."],
      quantity: "30",
      ratings: "4.2",
      company: "AllergyFree",
      type: "Antihistamine",
      price: "7.99",
      popular: true,
    },
  ];
  return (
    <div className="my-20">
      <SectionTitle title="TOP SELLING" />

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-6 mt-4">
        {/* {data?.map((i, idx) => (
          <MedicineCard key={idx} data={i} />
        ))} */}
      </div>
    </div>
  );
};

export default TopSellingProducts;
