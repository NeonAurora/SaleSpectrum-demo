import React, { useEffect } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import CustomTradesInsertion from "scenes/CustomTrades/CustomTradesInsertion";
import CustomTradesSearch from "scenes/CustomTrades/CustomTradesSearch";
import CustomTradesDelete from "scenes/CustomTrades/CustomTradesDeletion";

function CustomTrades() {
  return (
    <div>
      <h1>CustomTrades</h1>
      <Routes>
        <Route
          path="/"
          element={<div>Please Select a subpage from navbar</div>}
        />
        <Route path="insertion" element={<CustomTradesInsertion />} />
        <Route path="search" element={<CustomTradesSearch />} />
        <Route path="deletion" element={<CustomTradesDelete />} />
      </Routes>
    </div>
  );
}
export default CustomTrades;
