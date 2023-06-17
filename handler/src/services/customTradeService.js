import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5001";
const API_URL = `${API_BASE_URL}/api/customTrades`;

const addCustomTrade = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  return axios.post(`${API_URL}/add`, formData, config);
};

const searchCustomTrade = async (customTradeId) => {
  const response = await axios.get(`${API_URL}/search/${customTradeId}`);
  const customTradeData = response.data.customTradeData;
  const audioUrl = response.data.audioUrl;
  return { customTradeData, audioUrl };
};

const updateCustomTrade = async (customTradeId, updatedCustomTradeData) => {
  const response = await axios.put(
    `${API_URL}/update/${customTradeId}`,
    updatedCustomTradeData
  );
  return response.data;
};

const deleteCustomTrade = async (customTradeId) => {
  return axios.delete(`${API_URL}/delete/${customTradeId}`);
};

async function updateAudio(customTradeId, formData) {
  console.log(
    "Updating audio for customTradeId:",
    customTradeId,
    "formData:",
    formData
  );
  try {
    const response = await axios.put(
      `${API_URL}/update-audio/${customTradeId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Response from updateAudio API call:", response);
    return { status: "success", message: response.data.message };
  } catch (error) {
    console.error("Error updating audio:", error);
    return { status: "error", message: error.response.data.message };
  }
}

export default {
  addCustomTrade,
  searchCustomTrade,
  updateCustomTrade,
  deleteCustomTrade,
  updateAudio,
};
