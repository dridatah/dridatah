import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  offCanvasOpen: false,
  mobileMenuOpen: false,
  homeThreeCanvasMenuOpen: false,
  home_five_active_section: "banner-box",
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    // home 1 & 2
    toggleOffCanvas: (state) => {
      state.offCanvasOpen = !state.offCanvasOpen;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    // home 3
    toggleHomeThreeCanvasMenu: (state) => {
      state.homeThreeCanvasMenuOpen = !state.homeThreeCanvasMenuOpen;
    },
    hideHomeThreeCanvasMenu: (state) => {
      state.homeThreeCanvasMenuOpen = false;
    },
    // home 5
    handleHomeFiveActiveSection: (state, action) => {
      state.home_five_active_section = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  toggleOffCanvas,
  toggleMobileMenu,
  toggleHomeThreeCanvasMenu,
  hideHomeThreeCanvasMenu,
  handleHomeFiveActiveSection
} = globalSlice.actions

export default globalSlice.reducer