import { BASE_URL } from "@/utils/url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fetchData = createApi({
  reducerPath: "vendorProductsById",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/product/multiple`,
    }),
    getSingleProducts: builder.query({
      query: (id) => `/product/single/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductsQuery } = fetchData;

export default fetchData;
