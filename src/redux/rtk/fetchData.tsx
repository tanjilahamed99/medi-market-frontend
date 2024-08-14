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
    getAllOders: builder.query({
      query: (query) => {
        const { adminId, adminEmail, role } = query;
        return {
          url: `/orders/${adminId}/${adminEmail}/${role}`,
        };
      },
    }),
    getAllUser: builder.query({
      query: (query) => {
        const { adminId, adminEmail, role } = query;
        return {
          url: `/user/allUsersData/${adminId}/${adminEmail}/${role}`,
        };
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductsQuery,
  useGetAllOdersQuery,
  useGetAllUserQuery,
} = fetchData;

export default fetchData;
