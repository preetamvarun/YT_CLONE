import { createSlice } from '@reduxjs/toolkit';

const cacheSlice = createSlice({
  name: 'cacheSlice',
  initialState: {
    cacheObj: {},
  },
  reducers: {
    manageCache: (state, action) => {
      /*
            action : {
                ip : [1,2,3,4,5,6]
            }
        */
      state.cacheObj = { ...action.payload, ...state.cacheObj };
    },
  },
});

export const { manageCache } = cacheSlice.actions;
export default cacheSlice.reducer;
