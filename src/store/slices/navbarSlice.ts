import { createSlice } from "@reduxjs/toolkit";

interface NavbarState {
  sidebarOpen: boolean;
  cartSidebarOpen: boolean;
  locationModelOpen: boolean;
}

const initialState: NavbarState = {
  sidebarOpen: false,
  cartSidebarOpen: false,
  locationModelOpen: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    toggleCartSidebar: (state) => {
      state.cartSidebarOpen = !state.cartSidebarOpen;
    },
    toggleLocationModal: (state) => {
      state.locationModelOpen = !state.locationModelOpen;
    },
  },
});

export const { toggleSidebar, toggleCartSidebar, toggleLocationModal } =
  navbarSlice.actions;
export default navbarSlice.reducer;
