import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://639092530bf398c73a8c0f78.mockapi.io/';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts`,
      providesTags: ['Contacts'],
    }),

    getContactById: builder.query({
      query: id => `contacts/${id}`,
      providesTags: ['Contacts'],
    }),

    addContact: builder.mutation({
      query: value => ({
        url: 'contacts',
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),

    updateContact: builder.mutation({
      query: fields => ({
        url: `contacts/${fields.id}`,
        method: 'PUT',
        body: fields,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactByIdQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation
  
} = contactsApi;
