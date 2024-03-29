import { baseApi } from '../../api/baseApi'


export const productApi = baseApi.injectEndpoints({
     endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: '/products',
      method: 'GET'
      }),
      providesTags: ['products']
      
    }),
    getTestimonial: builder.query({
      query: () => ({
        url: '/testimonial',
      method: 'GET'
      }),
      providesTags: ['products']
      
    }),
    getVolunteer: builder.query({
      query: () => ({
        url: '/volunteer',
      method: 'GET'
      }),
      providesTags: ['products']
      
    }),
    getDonar: builder.query({
      query: () => ({
        url: '/donar',
      method: 'GET'
      }),
      providesTags: ['products']
      
    }),
    getPost: builder.query({
      query: () => ({
        url: '/post',
      method: 'GET'
      }),
      providesTags: ['products']
      
    }),

    getSingleProduct: builder.query({
      query: (id)=> ({
        url: `/products/${id}`
      })
    }),

    createProducts: builder.mutation({
      query: (body) => ({
        url: '/products',
        method: "POST",
        body,
      }),
      invalidatesTags: ['products']
    }),

    createDonar: builder.mutation({
      query: (body)=>({
        url: '/donar',
        method: "POST",
        body
      }),
      invalidatesTags: ['products']
    }),
    createTestimonial: builder.mutation({
      query: (body)=>({
        url: '/testimonial',
        method: "POST",
        body
      }),
      invalidatesTags: ['products']
    }),
    createVolunteer: builder.mutation({
      query: (body)=>({
        url: '/volunteer',
        method: "POST",
        body
      }),
      invalidatesTags: ['products']
    }),


    createUser: builder.mutation({
      query: (body) => ({
        url: '/api/v1/register',
        method: "POST",
        body,
      }),
      invalidatesTags: ['user']
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: 'post',
        method: "POST",
        body,
      }),
      invalidatesTags: ['user']
    }),



    updateProducts: builder.mutation({
      query: ( userInfo) => {
     
        return {
          url: `/products/${userInfo.id}`,
          method: 'PUT',
          body: userInfo
        }
      },
      invalidatesTags: ['products']
    }),
  
    deleteProducts: builder.mutation({
      query: (id) => {
      return {
          url: `/products/${id}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: ['products']
    })
  }),
})


export const { 
  useCreateUserMutation, 
  useGetSingleProductQuery, 
  useGetProductsQuery, 
  useCreateProductsMutation, 
  useDeleteProductsMutation, 
  useUpdateProductsMutation,
  useCreateDonarMutation,
  useGetDonarQuery,
  useCreateTestimonialMutation,
  useGetTestimonialQuery,
  useCreateVolunteerMutation,
  useGetVolunteerQuery,
  useCreatePostMutation,
  useGetPostQuery

} 
  = productApi
