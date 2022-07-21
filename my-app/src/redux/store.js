import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filteSliece';

export const store = configureStore({
  reducer: {
    filter,
  },
});
