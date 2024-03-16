import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000',
credentials: 'include',
}),
  
  endpoints: () => ({}),
  tagTypes: ['products', 'user']
  })