"use client";

import { useGetAllProductsQuery } from "@/redux/rtk/fetchData";
import { useRouter } from "next/navigation";

const AllProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery({});
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="flex items-center">
        <span className="loading loading-ring  h-[300px] w-[10%] mx-auto"></span>
      </div>
    );
  }

  const view = (id: any) => {
    router.push(`/productsDetails?id=${id}`);
  };

  return (
    <div className="p-5">
      <div className="bg-white w-full rounded-lg p-3 mb-4">
        <h2 className="text-primary-text font-semibold text-xl px-5">
          All Products
        </h2>
      </div>

      {/* data fetching */}

      <div className="bg-white p-3 rounded-lg">
        <div className="overflow-x-auto mt-5">
          <table className="min-w-full border border-gray-200 bg-white shadow-lg overflow-x-auto">
            {/* Table Header */}
            <thead>
              <tr className=" text-center border-b-2 text-base text-[#040404]">
                <th className=" py-2 border font-normal whitespace-nowrap">
                  No.
                </th>
                <th className=" py-2 border font-normal whitespace-nowrap">
                  Products Name
                </th>
                <th className=" py-2 border font-normal whitespace-nowrap">
                  Quantity
                </th>
                <th className=" py-2 border font-normal whitespace-nowrap">
                  category
                </th>
                <th className=" py-2 border font-normal whitespace-nowrap">
                  Discount
                </th>
                <th className=" py-2 border font-normal whitespace-nowrap">
                  Price
                </th>
                <th className=" py-2 border font-normal whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows */}
              {data?.products?.map((i: any, idx: any) => (
                <tr
                  key={idx}
                  className="h-[40px] md:h-[50px] border-b-2 font-normal"
                >
                  <th className="px-4 py-3 border text-center font-normal whitespace-nowrap">
                    {idx + 1}
                  </th>
                  <th className="px-4 py-3 border text-center font-normal whitespace-nowrap">
                    {i?.name}
                  </th>
                  <th className="px-4 py-3 border text-center font-normal whitespace-nowrap">
                    {i?.quantity}
                  </th>
                  <th className="px-4 py-3 border text-center font-normal whitespace-nowrap ">
                    {i?.category}
                  </th>
                  <th className="px-4 py-3 border text-center font-normal whitespace-nowrap ">
                    {i?.discount}%
                  </th>
                  <th className="px-4 py-3 border text-center font-normal whitespace-nowrap ">
                    {i?.price}
                  </th>
                  <th className="px-4 py-3 border text-center font-normal whitespace-nowrap cursor-pointer">
                    <h2 onClick={() => view(i._id)} className="cursor-pointer">
                      view
                    </h2>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
