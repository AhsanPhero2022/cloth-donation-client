import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://ass6-server-iota.vercel.app',
credentials: 'include',
}),
  
  endpoints: () => ({}),
  tagTypes: ['products', 'user']
  })