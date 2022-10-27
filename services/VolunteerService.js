import { apiSlice } from "services";

const volunteerEndpoint = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    addVolunteer: build.mutation({
      query: (body) => ({
        url: "/user",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddVolunteerMutation } = volunteerEndpoint;
