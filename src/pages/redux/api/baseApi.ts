import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "preeminent-treacle-57fedb.netlify.app",
    credentials: "include",
  }),

  endpoints: () => ({}),
  tagTypes: ["products", "user"],
});
