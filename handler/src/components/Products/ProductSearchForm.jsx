import React from 'react';

const ProductSearchForm = ({ productData }) => {
  return (
    <form>
      {Object.entries(productData).map(([key, value]) => {
        if (key === '_id') {
          return null;
        } else {
          return (
            <label key={key}>
              {key}:
              <input type="text" name={key} value={value} readOnly />
            </label>
          );
        }
      })}
    </form>
  );
};

export default ProductSearchForm;
