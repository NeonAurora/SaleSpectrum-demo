import express from "express";
import { addProductStat } from "../../controllers/DatabaseControllers/addQuery.js";
import { searchProductStat } from "../../controllers/DatabaseControllers/getQuery.js";
import { deleteProductStat } from "../../controllers/DatabaseControllers/removeQuery.js";
import { updateProductStat } from "../../controllers/DatabaseControllers/setQuery.js";

const router = express.Router();

// Router definitions
router.post("/add", addProductStat);
router.get("/search/:id", searchProductStat);
router.delete("/delete/:_id", deleteProductStat);
router.put("/update/:id", updateProductStat);

export default router;
