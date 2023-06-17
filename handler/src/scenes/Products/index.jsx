import React, { useEffect } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import ProductsInsertion from "scenes/Products/ProductsInsertion";
import ProductsDeletion from "scenes/Products/ProductsDeletion";
import ProductsSearch from "scenes/Products/ProductsSearch";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <Routes>
        <Route
          path="/"
          element={<div>Please Select a subpage from navbar</div>}
        />
        <Route path="insertion" element={<ProductsInsertion />} />
        <Route path="search" element={<ProductsSearch />} />
        <Route path="deletion" element={<ProductsDeletion />} />
      </Routes>
    </div>
  );
};

export default Products;
