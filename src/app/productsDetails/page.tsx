import ProductDetailsForm from "@/pages/productsDetails/ProductDetailsForm";

const page = ({ searchParams }: any) => {
  const id = searchParams?.id;

  return (
    <div>
      <ProductDetailsForm id={id} />
    </div>
  );
};

export default page;
