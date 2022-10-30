import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  contactNumber: "",
  gender: "",
  address: "",
  prayerRequest: "",
};

export const altarCallSlice = createSlice({
  name: "altarCall",
  initialState,
  reducers: {
    setAltarCall: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.contactNumber = action.payload.contactNumber;
      state.gender = action.payload.gender;
      state.address = action.payload.address;
      state.prayerRequest = action.payload.prayerRequest;
    },
  },
});

export const { setAltarCall } = altarCallSlice.actions;

export default altarCallSlice.reducer;
