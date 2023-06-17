import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const customFetchBaseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
  fetchFn: async (input, init) => {
    console.log("Request input:", input);
    console.log("Request init:", init);
    const response = await fetch(input, init);
    console.log("Response:", response);
    return response;
  },
});

export const api = createApi({
  baseQuery: customFetchBaseQuery,
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "CustomTrades",
    "CustomTradeAudio",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
    getCustomTrades: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/customTrades",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["customTrades"],
    }),
    // Add this to your endpoints in state/api.js
    getCustomTradeAudio: build.query({
      query: (transactionId) => `client/customTrades/${transactionId}/audio`,
      providesTags: ["CustomTrades"],
    }),

    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
    register: build.mutation({
      query: (userData) => ({
        url: "auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    login: build.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetCustomTradesQuery,
  useGetCustomTradeAudioQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
  useRegisterMutation,
  useLoginMutation,
} = api;
