import OverallStat from "../../models/OverallStat.js";
import Product from "../../models/Product.js";
import ProductStat from "../../models/ProductStat.js";
import Transaction from "../../models/Transaction.js";
import User from "../../models/User.js";
import CustomTrade from "../../models/CustomTrade.js";
import bcrypt from "bcryptjs";

export const addOverallStat = async (req, res) => {
  try {
    const newStat = new OverallStat(req.body);
    const savedStat = await newStat.save();
    res.status(201).json(savedStat);
  } catch (error) {
    res.status(400).json({ message: "Error: " + error });
  }
};

export const addProduct = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const newStat = new Product(req.body);
    const savedStat = await newStat.save();
    res.status(201).json(savedStat);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ message: `Error: ${error}` });
  }
};

export const addProductStat = async (req, res) => {
  try {
    const newStat = new ProductStat(req.body);
    const savedStat = await newStat.save();
    res.status(201).json(savedStat);
  } catch (error) {
    res.status(400).json({ message: "Error: " + error });
  }
};

export const addTransaction = async (req, res) => {
  try {
    const audioMetadata = {
      fileUrl: req.file.path,
      title: req.body.title,
      duration: req.body.duration,
      format: req.body.format,
      bitrate: req.body.bitrate,
      sampleRate: req.body.sampleRate,
      channels: req.body.channels,
      fileSize: req.body.fileSize,
    };

    const transactionData = JSON.parse(req.body.transactionData);
    const newTransaction = new Transaction({
      ...transactionData,
      audioMetadata,
    });
    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (error) {
    res.status(400).json({ message: "Error: " + error });
  }
};

export const addCustomTrade = async (req, res) => {
  try {
    const audioMetadata = {
      fileUrl: req.file.path,
      title: req.body.title,
      duration: req.body.duration,
      format: req.body.format,
      bitrate: req.body.bitrate,
      sampleRate: req.body.sampleRate,
      channels: req.body.channels,
      fileSize: req.body.fileSize,
    };

    const customTradeData = JSON.parse(req.body.customTradeData);
    const newTrade = new CustomTrade({
      ...customTradeData,
      audioMetadata,
    });
    const savedTrade = await newTrade.save();
    res.status(201).json(savedTrade);
  } catch (error) {
    res.status(400).json({ message: "Error: " + error });
  }
};

export const addStat = async (req, res) => {
  try {
    console.log("Request body:", req.body);

    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    
    // Replace the plain-text password with the hashed password
    const userWithHashedPassword = {
      ...req.body,
      password: hashedPassword,
    };

    const newStat = new User(userWithHashedPassword);
    const savedStat = await newStat.save();
    res.status(201).json(savedStat);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ message: "Error: " + error });
  }
};
