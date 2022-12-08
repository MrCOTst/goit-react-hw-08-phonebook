import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const API_KEY = '?api_key=6295881d104dda08db4ad0327ab9a326';
// const BASE_URL = 'https://api.themoviedb.org/3/';

// export const getTrending = () =>
//   axios.get(`${BASE_URL}trending/movie/day${API_KEY}`);

const BASE_URL = 'https://639092530bf398c73a8c0f78.mockapi.io/'


export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      // query: () => `trending/movie/day${API_KEY}`,
      query: () => `contacts`,
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


// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://639092530bf398c73a8c0f78.mockapi.io',
//   }),