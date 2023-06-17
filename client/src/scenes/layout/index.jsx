import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from "state/api";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(isNonMobile);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);

  return (
    <Box display="flex" flexDirection={isNonMobile ? "row" : "column"} width="100%" height="100%">
      {isNonMobile || isSidebarOpen ? (
        <Sidebar
          user={data || {}}
          isNonMobile={isNonMobile}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      ) : null}
      <Box flexGrow={1} overflow="auto">
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box padding={isNonMobile ? 3 : 1}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
