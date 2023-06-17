import React from "react";

const ProductEditForm = ({ productData, onConfirm }) => {
  const [updatedData, setUpdatedData] = React.useState(productData);

  const handleInputChange = (key, value) => {
    setUpdatedData({ ...updatedData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(updatedData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(updatedData).map(([key, value]) => {
        if (key === "_id") {
          return null;
        } else {
          return (
            <label key={key}>
              {key}:
              <input
                type="text"
                name={key}
                value={value}
                onChange={(e) => handleInputChange(key, e.target.value)}
              />
            </label>
          );
        }
      })}
      <button type="submit">Confirm</button>
    </form>
  );
};

export default ProductEditForm;
