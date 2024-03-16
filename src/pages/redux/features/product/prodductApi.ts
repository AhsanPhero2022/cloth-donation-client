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
    createUser: builder.mutation({
      query: (body) => ({
        url: '/api/v1/register',
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

} 
  = productApi
