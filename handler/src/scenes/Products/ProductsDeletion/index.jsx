import React, { useState } from "react";
import productService from "services/productsService";

const ProductDeletion = () => {
  const [_id, setId] = useState("");
  const [message, setMessage] = useState("");

  const onDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await productService.deleteProduct(_id);
      setMessage(res.data.message);
    } catch (error) {
      setMessage("Error deleting product");
    }
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <form onSubmit={onDelete}>
        <label htmlFor="_id">ID:</label>
        <input
          type="text"
          id="_id"
          value={_id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button type="submit">Delete</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProductDeletion;
