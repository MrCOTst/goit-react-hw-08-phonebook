import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactsApi } from './contactsSliceApi'

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]:contactsApi.reducer,
     filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

