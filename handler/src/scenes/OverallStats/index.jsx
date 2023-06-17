import { Route, Routes, Outlet } from "react-router-dom";
import OverallStatsInsertion from "scenes/OverallStats/OverallStatsInsertion";
import OverallStatsSearch from "scenes/OverallStats/OverallStatsSearch";
import OverallStatsDeletion from "scenes/OverallStats/OverallStatsDeletion";

function OverallStats() {
  return (
    <div>
      <h1>Overall Stats</h1>
      <Routes>
        <Route path="/" element={<div>Please select a subpage from the navbar.</div>} />
        <Route path="insertion" element={<OverallStatsInsertion />} />
        <Route path="search" element={<OverallStatsSearch />} />
        <Route path="deletion" element={<OverallStatsDeletion />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default OverallStats;
