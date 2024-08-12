"use client";

import { useGetAllProductsQuery } from "@/redux/rtk/fetchData";
import SectionTitle from "./SectionTitle";
import { useEffect, useState } from "react";
import MedicineCard from "./MedicineCard";

interface RelatedProductsProps {
  category: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ category }) => {
  const { data } = useGetAllProductsQuery({});
  const [relatedData, setRelatedData] = useState([]);

  useEffect(() => {
    if (data?.products?.length > 0) {
      const filter = data?.products?.filter(
        (item: object) => item?.category === category
      );
      setRelatedData([...filter]);
    }
  }, [data]);

  if (!data) {
    return (
      <div className="flex items-center">
        <span className="loading loading-ring  h-[300px] w-[10%] mx-auto"></span>
      </div>
    );
  }

  return (
    <div className="my-5">
      <SectionTitle title="Related Products" />
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-5 mt-3">
        {relatedData?.map((item: object, idx: any) => (
          <MedicineCard data={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
