import { configureStore } from '@reduxjs/toolkit';
import proposalsReducer from './proposalsReducer';

export const store = configureStore({
  reducer: {
    proposalsReducer: proposalsReducer
  },
});
