import axios from "axios";

const API_URL = process.env.REACT_APP_BASE_URL + "/api/productStats";

const addProductStat = async (data) => {
  return axios.post(`${API_URL}/add`, data);
};

const searchProductStat = async (documentId) => {
  return axios.get(`${API_URL}/search/${documentId}`);
};

const deleteProductStat = async (documentId) => {
  return axios.delete(`${API_URL}/delete/${documentId}`);
};

const updateProductStat = async (documentId, updatedData) => {
  return axios.put(`${API_URL}/update/${documentId}`, updatedData);
};


export default {
  addProductStat,
  searchProductStat,
  deleteProductStat,
  updateProductStat
};
