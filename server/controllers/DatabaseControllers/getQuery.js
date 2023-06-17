import CustomTrade from "../../models/CustomTrade.js";
import OverallStat from "../../models/OverallStat.js";
import Product from "../../models/Product.js";
import ProductStat from "../../models/ProductStat.js";
import Transaction from "../../models/Transaction.js";
import User from "../../models/User.js";

export const searchOverallStat = async (req, res) => {
  try {
    const stat = await OverallStat.findById(req.params.id);
    if (!stat) {
      return res.status(404).json({ message: "Stat not found" });
    }
    res.json(stat);
  } catch (error) {
    res.status(500).json({ message: `Error: ${error}` });
  }
};

export const searchProduct = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const stat = await Product.findById(req.params.id);
    if (!stat) {
      return res.status(404).json({ message: "Stat not found" });
    }
    res.json(stat);
  } catch (error) {
    res.status(500).json({ message: `Error: ${error}` });
  }
};

export const searchProductStat = async (req, res) => {
  try {
    const stat = await ProductStat.findById(req.params.id);
    if (!stat) {
      return res.status(404).json({ message: "Stat not found" });
    }
    res.json(stat);
  } catch (error) {
    res.status(500).json({ message: "Error: " + error });
  }
};

export const searchTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    const { audioMetadata } = transaction;
    if (!audioMetadata) {
      return res.status(404).json({ message: "Audio not found" });
    }

    const audioUrl = `http://${
      req.headers.host
    }/${audioMetadata.fileUrl.replace(/\\/g, "/")}`;

    res.json({ transactionData: transaction, audioUrl });
  } catch (error) {
    res.status(500).json({ message: "Error: " + error });
  }
};

export const searchCustomTrade = async (req, res) => {
  try {
    const transaction = await CustomTrade.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    const { audioMetadata } = transaction;
    if (!audioMetadata) {
      return res.status(404).json({ message: "Audio not found" });
    }

    const audioUrl = `http://${
      req.headers.host
    }/${audioMetadata.fileUrl.replace(/\\/g, "/")}`;

    res.json({ transactionData: transaction, audioUrl });
  } catch (error) {
    res.status(500).json({ message: "Error: " + error });
  }
};

export const searchStat = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const stat = await User.findById(req.params.id);
    if (!stat) {
      return res.status(404).json({ message: "Stat not found" });
    }
    res.json(stat);
  } catch (error) {
    res.status(500).json({ message: "Error: " + error });
  }
};
