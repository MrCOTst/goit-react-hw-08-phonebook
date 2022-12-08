import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://639092530bf398c73a8c0f78.mockapi.io',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),

    addContact: builder.mutation({
      query: value => ({
        url: '/contacts',
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;
