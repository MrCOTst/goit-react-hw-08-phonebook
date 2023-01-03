import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
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
      query(id) {
        // console.log('contactApi:', id);
        return {
          url: `/contacts/${id}`,
          method: 'get',
        };
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
      query(id) {
        // console.log('contactApi:', id);
        return {
          url: `/contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Contacts'],
    }),

    updateContact: builder.mutation({
      query: ({ id, name, number }) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: { name, number },
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
