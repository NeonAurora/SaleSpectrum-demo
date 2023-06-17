import axios from "axios";

const API_URL = process.env.REACT_APP_BASE_URL + "/api/products";

const addProduct = async (data) => {
  return axios.post(`${API_URL}/add`, data);
};

const searchProduct = async (productId) => {
  return axios.get(`${API_URL}/search/${productId}`);
};

const deleteProduct = async (productId) => {
  return axios.delete(`${API_URL}/delete/${productId}`);
};

const updateProduct = async (productId, updatedData) => {
  return axios.put(`${API_URL}/update/${productId}`, updatedData);
};


export default {
  addProduct,
  searchProduct,
  deleteProduct,
  updateProduct,
};
