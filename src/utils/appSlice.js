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

    closeSideBarMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleSideBarMenu, closeSideBarMenu } = appSlice.actions;

export default appSlice.reducer;
