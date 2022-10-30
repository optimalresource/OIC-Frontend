import { apiSlice } from "services";

const subscribeEndpoint = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    addSubscription: build.mutation({
      query: (body) => ({
        url: "/subscriber",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddSubscriptionMutation } = subscribeEndpoint;
