import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.REACT_APP_BASE_URL_ASP;
const createBaseQuery = () => fetchBaseQuery({ baseUrl: BASE_URL });
const TAG_TYPES = ["AuditLogs", "AccountRequests"];
const createEndpoints = (builder) => {
  return {
    getAuditLogs: builder.query({
      query: () => "management/auditLogs",
      providesTags: ["AuditLogs"],
    }),
    createAccountRequest: builder.mutation({
      query: (requestDetails) => ({
        url: "management/reqAccess",
        method: "POST",
        body: requestDetails,
      }),
    }),
  };
};

export const adminAuditApi = createApi({
  baseQuery: createBaseQuery(),
  endpoints: createEndpoints,
  reducerPath: "adminAuditApi",
  tagTypes: TAG_TYPES,
});

export const {
  useGetAuditLogsQuery,
  useCreateAccountRequestMutation,
} = adminAuditApi;
