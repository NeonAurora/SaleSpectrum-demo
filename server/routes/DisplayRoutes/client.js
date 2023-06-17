import express from "express";
import {
  getProducts,
  getCustomers,
  getTransactions,
  getCustomTrades,
  getTransactionAudio,
  getCustomTradeAudio,
  getGeography,
} from "../../controllers/PanelControllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/customTrades", getCustomTrades);
router.get("/transactions/:id/audio", getTransactionAudio);
router.get("/customTrades/:id/audio", getCustomTradeAudio);
router.get("/geography", getGeography);

export default router;
