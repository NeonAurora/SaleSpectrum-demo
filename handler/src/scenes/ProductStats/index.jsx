import { Route, Routes, Outlet } from "react-router-dom";
import ProductStatsInsertion from "scenes/ProductStats/ProductStatsInsertion";
import ProductStatsSearch from "scenes/ProductStats/ProductStatsSearch";
import ProductStatsDeletion from "scenes/ProductStats/ProductStatsDeletion";

function ProductStats() {
  return (
    <div>
      <h1>Product Stats</h1>
      <Routes>
        <Route path="/" element={<div>Please select a subpage from the navbar.</div>} />
        <Route path="insertion" element={<ProductStatsInsertion />} />
        <Route path="search" element={<ProductStatsSearch />} />
        <Route path="deletion" element={<ProductStatsDeletion />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default ProductStats;
