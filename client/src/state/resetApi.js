import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const customFetchBaseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
});

export const resetApi = createApi({
  baseQuery: customFetchBaseQuery,
  reducerPath: "resetApi",
  tagTypes: [
  ],
  endpoints: (build) => ({

    requestPasswordReset: build.mutation({
      query: (email) => ({
        url: "/auth/forgotPass",
        method: "POST",
        body: { email },
      }),
    }),

    verifyOtp: build.mutation({
      query: ({ email, otp }) => ({
        url: "/auth/verifyOTP",
        method: "POST",
        body: { email, otp },
      }),
    }),

    resetPassword: build.mutation({
      query: ({ email, password }) => ({
        url: "/auth/resetPass",
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const {

  useRequestPasswordResetMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
} = resetApi;
