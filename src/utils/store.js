import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import cacheSlice from './cacheSlice';
import searchResultsSlice from './searchResultsSlice';

const store = configureStore({
  reducer: {
    app: appSlice,
    cache: cacheSlice,
    searchResultsSlice: searchResultsSlice,
  },
});

export default store;
