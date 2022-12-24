import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import axios from '../../node_modules/axios/index';
// import { setAuthHeader } from './auth/operations';

// const BASE_URL = 'https://639092530bf398c73a8c0f78.mockapi.io/';
const BASE_URL = 'https://connections-api.herokuapp.com';

// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data, params });
//       return { data: result.data };
//     } catch (axiosError) {
//       let err = axiosError;
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       };
//     }
//   };

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState()).auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },


  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: `/contacts`,
        method: 'get',
      }),
      providesTags: ['Contacts'],
    }),

    getContactById: builder.query({
      query (id) {
        console.log('contactApi:', id);
        return {
          url: `/contacts/${id}`,
        method: 'get',
        }
        
      },
      providesTags: ['Contacts'],
    }),

    createContact: builder.mutation({
      query(contact) {
        // console.log('contactApi:', contact);
        return {
          url: `/contacts`,
          method: 'post',
          body: contact,
        };
      },
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),

    updateContact: builder.mutation({
      query: ({id, name, number}) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: {name, number},
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactByIdQuery,
  useDeleteContactMutation,
  useUpdateContactMutation,
  useCreateContactMutation,
} = contactsApi;

// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: axiosBaseQuery({
//     baseUrl: BASE_URL,
//   }),
//   tagTypes: ['Contacts'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => ({
//         url: `/contacts`,
//         method: 'get',
//       }),
//       providesTags: ['Contacts'],
//     }),

//     getContactById: builder.query({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'get',
//       }),
//       providesTags: ['Contacts'],
//     }),

//     createContact: builder.mutation({
//       query(contact) {
//         console.log('contactApi:', contact);
//         return {
//           url: `/contacts`,
//           method: 'post',
//           body: contact,
//         };
//       },
//       invalidatesTags: ['Contacts'],
//     }),

//     deleteContact: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contacts'],
//     }),

//     updateContact: builder.mutation({
//       query: fields => ({
//         url: `/contacts/${fields.id}`,
//         method: 'PATCH',
//         body: fields,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//   }),
// });


// addContact: builder.mutation({
//   query: value => ({
//     url: '/contacts',
//     method: 'POST',
//     body: value,
//   }),
//   invalidatesTags: ['Contacts'],
// }),
