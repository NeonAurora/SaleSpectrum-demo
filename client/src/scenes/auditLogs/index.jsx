import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetAuditLogsQuery } from "state/adminAuditApi";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";
import CustomColumnMenu from "components/DataGridCustomColumnMenu";

const AuditLogs = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetAuditLogsQuery();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
    },
    {
      field: "timestamp",
      headerName: "Created At",
      flex: 1,
      type: "dateTime",
      valueFormatter: ({ value }) => {
        return new Date(value).toLocaleString();
      },
    },
    {
      field: "details",
      headerName: "Details",
      flex: 1.5,
    },
    {
      field: "salesImpact",
      headerName: "Sales Impact",
      flex: 1,
      valueFormatter: ({ value }) => value.toFixed(2), // Optional: Format to 2 decimal places.
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Audit Logs" subtitle="Audit Logs for Admin Panel" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row.id}
          rows={data || []}
          columns={columns}
          components={{
            ColumnMenu: CustomColumnMenu,
          }}
        />
      </Box>
    </Box>
  );
};

export default AuditLogs;
