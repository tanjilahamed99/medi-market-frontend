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
    // postVenue: builder.mutation({
    //   query: ({ url, body }) => ({
    //     url,
    //     method: "POST",
    //     body,
    //   }),
    // }),
  }),
});

export const {useGetAllProductsQuery} = fetchData;

export default fetchData;
