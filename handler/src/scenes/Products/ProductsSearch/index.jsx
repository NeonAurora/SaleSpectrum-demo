import React, { useState } from "react";
import ProductSearchForm from "components/Products/ProductSearchForm";
import ProductEditForm from "components/Products/ProductEditForm";
import productService from "services/productsService";

const ProductSearch = () => {
  const [productId, setProductId] = useState("");
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await productService.searchProduct(productId);
      const data = response.data;
      setProductData(data);
    } catch (error) {
      setProductData(null);
      setError("Error: Product not found");
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleConfirm = async (updatedData) => {
    try {
      await productService.updateProduct(productId, updatedData);
      setProductData(updatedData);
      setEditMode(false);
    } catch (error) {
      setError("Error: Failed to update the product");
    }
  };

  return (
    <div>
      <h1>Search Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter the ID of the product you want to search for:
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div>
        {error && <p>{error}</p>}
        {productData && !editMode && (
          <>
            <ProductSearchForm productData={productData} />
            <button onClick={handleEdit}>Edit product</button>
          </>
        )}
        {productData && editMode && (
          <ProductEditForm
            productData={productData}
            onConfirm={handleConfirm}
          />
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
