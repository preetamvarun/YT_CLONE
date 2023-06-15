import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',

  initialState: {
    isMenuOpen: true,
  },

  reducers: {
    //action
    toggleSideBarMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleSideBarMenu } = appSlice.actions;

export default appSlice.reducer;
