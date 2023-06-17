import React, { useEffect } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import TransactionsInsertion from "scenes/Transactions/TransactionsInsertion";
import TransactionsSearch from "scenes/Transactions/TransactionsSearch";
import TransactionsDelete from "scenes/Transactions/TransactionsDeletion";

function Transactions() {
  return (
    <div>
      <h1>Transactions</h1>
      <Routes>
        <Route path="/" element={<div>Please Select a subpage from navbar</div>} />
        <Route path="insertion" element={<TransactionsInsertion />} />
        <Route path="search" element={<TransactionsSearch />} />
        <Route path="deletion" element={<TransactionsDelete />} />
      </Routes>
    </div>
  )
}
export default Transactions;
