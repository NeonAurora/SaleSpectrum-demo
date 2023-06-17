import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";
import Header from "components/Header";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";

const Transactions = () => {
  const theme = useTheme();

  // values to be sent to the backend
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [audioData, setAudioData] = useState(null);
  const [audioModalOpen, setAudioModalOpen] = useState(false);
  const handleAudioClick = async (transactionId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/client/transactions/${transactionId}/audio`
      );
      const data = await response.json();
      setAudioData(data);
      setAudioModalOpen(true);
    } catch (error) {
      console.error("Error fetching audio:", error);
    }
  };
  const AudioModal = ({ open, onClose, audioData }) => {
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Audio</DialogTitle>
        <DialogContent>
          {audioData && <audio controls src={audioData.audioUrl} />}
        </DialogContent>
      </Dialog>
    );
  };

  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "Transaction Types",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Amount",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "audio",
      headerName: "Audio",
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        if (params.row.audioMetadata) {
          return (
            <button
              onClick={() => {
                handleAudioClick(params.row._id);
              }}
            >
              Show Audio
            </button>
          );
        } else {
          return "No audio available";
        }
      },
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="TRANSACTIONS" subtitle="Entire list of transactions" />
      <Box
        height="80vh"
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
          getRowId={(row) => row._id}
          rows={(data && data.transactions) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          rowsPerPageOptions={[20, 50, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        />
        <AudioModal
          open={audioModalOpen}
          onClose={() => setAudioModalOpen(false)}
          audioData={audioData}
        />
      </Box>
    </Box>
  );
};

export default Transactions;
