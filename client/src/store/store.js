import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './slices/contactSlice';
import volunteerReducer from './slices/volunteerSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    volunteer: volunteerReducer,
  },
});

