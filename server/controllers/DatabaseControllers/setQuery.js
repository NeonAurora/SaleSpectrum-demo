import OverallStat from "../../models/OverallStat.js";
import Product from "../../models/Product.js";
import ProductStat from "../../models/ProductStat.js";
import Transaction from "../../models/Transaction.js";
import CustomTrade from "../../models/CustomTrade.js";
import User from "../../models/User.js";

export const updateOverallStat = async (req, res) => {
  try {
    const updatedStat = await OverallStat.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedStat) {
      return res.status(404).json({ message: "Stat not found" });
    }

    res.json(updatedStat);
  } catch (error) {
    res.status(400).json({ message: `Error: ${error}` });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updatedStat = await Products.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedStat) {
      return res.status(404).json({ message: "Stat not found" });
    }

    res.json(updatedStat);
  } catch (error) {
    res.status(400).json({ message: `Error: ${error}` });
  }
};

export const updateProductStat = async (req, res) => {
  try {
    const updatedStat = await ProductStat.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedStat) {
      return res.status(404).json({ message: "Stat not found" });
    }

    res.json(updatedStat);
  } catch (error) {
    res.status(400).json({ message: "Error: " + error });
  }
};

export const updateTransaction = async (req, res) => {
  try {
    const transactionData = req.body;

    const updatedTransaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      transactionData,
      { new: true }
    );

    if (!updatedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.json({
      message: "Transaction updated successfully",
      data: updatedTransaction,
    });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateAudio = async (req, res) => {
  try {
    console.log("Received transactionId:", req.params.id, "file:", req.file);
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    if (req.file) {
      transaction.audioMetadata.fileUrl = req.file.path;
      await transaction.save();
      console.log(
        "Audio file updated successfully for transactionId:",
        req.params.id
      );
      res.status(200).json({ message: "Audio file updated successfully" });
    } else {
      res.status(400).json({ message: "No audio file provided" });
    }
  } catch (error) {
    console.error("Update Audio Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateCustomTrade = async (req, res) => {
  try {
    const customTradeData = req.body;

    const updatedCustomTrade = await CustomTrade.findByIdAndUpdate(
      req.params.id,
      customTradeData,
      { new: true }
    );

    if (!updatedCustomTrade) {
      return res.status(404).json({ message: "CustomTrade not found" });
    }

    res.json({
      message: "CustomTrade updated successfully",
      data: updatedCustomTrade,
    });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateCustomAudio = async (req, res) => {
  try {
    console.log("Received customTradeId:", req.params.id, "file:", req.file);
    const customTrade = await CustomTrade.findById(req.params.id);
    if (!customTrade) {
      return res.status(404).json({ message: "CustomTrade not found" });
    }

    if (req.file) {
      customTrade.audioMetadata.fileUrl = req.file.path;
      await customTrade.save();
      console.log(
        "Audio file updated successfully for customTradeId:",
        req.params.id
      );
      res.status(200).json({ message: "Audio file updated successfully" });
    } else {
      res.status(400).json({ message: "No audio file provided" });
    }
  } catch (error) {
    console.error("Update Audio Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const updateStat = async (req, res) => {
  try {
    const updatedStat = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedStat) {
      return res.status(404).json({ message: "Stat not found" });
    }

    res.json(updatedStat);
  } catch (error) {
    res.status(400).json({ message: "Error: " + error });
  }
};
