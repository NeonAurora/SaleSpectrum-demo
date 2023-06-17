import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import productService from "services/productsService";
import { useTheme } from "@mui/system";

const ProductInsertion = () => {
  const theme = useTheme();
  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    rating: 0,
    supply: 0,
  });
  const getRandomNumber = (length, decimals) => {
    const maxIntegerPart = Math.pow(10, length - decimals) - 1;
    const maxDecimalPart = Math.pow(10, decimals) - 1;

    const integerPart = Math.floor(Math.random() * (maxIntegerPart + 1));
    const decimalPart = Math.floor(Math.random() * (maxDecimalPart + 1));

    return parseFloat(
      (integerPart + decimalPart / Math.pow(10, decimals)).toFixed(decimals)
    );
  };
  const getRandomString = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return result;
  };
  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await productService.addProduct(productData);
      alert("Product data submitted successfully");
    } catch (error) {
      alert("Error submitting product data: " + error.message);
    }
  };

  const handleEntryTest = () => {
    const randomName = getRandomString(10);
    const randomDescription = getRandomString(10);
    const randomCategory = getRandomString(10);
    const randomPrice = getRandomNumber(5, 2);
    const randomRating = getRandomNumber(1, 0);
    const randomSupply = getRandomNumber(4, 0);

    setProductData({
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      category: randomCategory,
      rating: randomRating % 5,
      supply: randomSupply,
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary[600],
        color: theme.palette.secondary[300],
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Typography variant="h4">Add Product</Typography>
      <Box component="form" width="100%" onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            name="name"
            label="Name"
            value={productData.name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            name="price"
            label="Price"
            type="number"
            value={productData.price}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            name="description"
            label="Description"
            value={productData.description}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="category"
            label="Category"
            value={productData.category}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="rating"
            label="Rating"
            type="number"
            value={productData.rating}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="supply"
            label="Supply"
            type="number"
            value={productData.supply}
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <Box>
          <Button
            type="button"
            onClick={handleEntryTest}
            sx={{
              backgroundColor: theme.palette.secondary[300],
              marginTop: "1rem",
              mr: "1rem",
            }}
          >
            Entry Test
          </Button>
          <Button
            type="submit"
            sx={{
              backgroundColor: theme.palette.secondary[300],
              marginTop: "1rem",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductInsertion;
