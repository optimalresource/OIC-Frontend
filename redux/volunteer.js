import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  isMember: null,
  isServing: null,
  yearJoined: "",
  department: "",
  contactNumber: "",
  whatsAppNumber: "",
  ageRange: "",
  medicalCondition: "",
  isMedicalPractitioner: null,
  canLiftHeavyObjects: null,
  canTakeWeekfOff: null,
  daysAvailable: [],
  preferredTeam: "",
  mediaAbilities: [],
};

export const volunteerSlice = createSlice({
  name: "volunteer",
  initialState,
  reducers: {
    setVolunteer: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.gender = action.payload.gender;
      state.isMember = action.payload.isMember;
      state.isServing = action.payload.isServing;
      state.yearJoined = action.payload.yearJoined;
      state.department = action.payload.department;
      state.contactNumber = action.payload.contactNumber;
      state.whatsAppNumber = action.payload.whatsAppNumber;
      state.ageRange = action.payload.ageRange;
      state.medicalCondition = action.payload.medicalCondition;
      state.isMedicalPractitioner = action.payload.isMedicalPractitioner;
      state.canLiftHeavyObjects = action.payload.canLiftHeavyObjects;
      state.canTakeWeekfOff = action.payload.canTakeWeekfOff;
      state.daysAvailable = action.payload.daysAvailable;
      state.preferredTeam = action.payload.preferredTeam;
      state.mediaAbilities = action.payload.mediaAbilities;
    },
  },
});

export const { setVolunteer } = volunteerSlice.actions;

export default volunteerSlice.reducer;
