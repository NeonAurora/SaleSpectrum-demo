import React, { useState } from "react";
import DisplayForm from "components/ProductStats/ProductStatSearchFrom";
import EditForm from "components/ProductStats/ProductStatEditForm";
import productStatService from "services/productStatService";

const ProductStatsSearch = () => {
  const [documentId, setDocumentId] = useState("");
  const [documentData, setDocumentData] = useState(null);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await productStatService.searchProductStat(documentId);
      const data = response.data;
      setDocumentData(data);
    } catch (error) {
      setDocumentData(null);
      setError("Error: Document not found");
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleConfirm = async (updatedData) => {
    try {
      await productStatService.updateProductStat(documentId, updatedData);
      setDocumentData(updatedData);
      setEditMode(false);
    } catch (error) {
      setError("Error: Failed to update the document");
    }
  };

  return (
    <div>
      <h1>Search Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter the ID of the document you want to search for:
          <input
            type="text"
            value={documentId}
            onChange={(e) => setDocumentId(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div>
        {error && <p>{error}</p>}
        {documentData && !editMode && (
          <>
            <DisplayForm documentData={documentData} />
            <button onClick={handleEdit}>Edit records</button>
          </>
        )}
        {documentData && editMode && (
          <EditForm documentData={documentData} onConfirm={handleConfirm} />
        )}
      </div>
    </div>
  );
};

export default ProductStatsSearch;
