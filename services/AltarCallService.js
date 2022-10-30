import { apiSlice } from "services";

const altarCallEndpoint = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    addAltarCall: build.mutation({
      query: (body) => ({
        url: "/altarcall",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddAltarCallMutation } = altarCallEndpoint;
