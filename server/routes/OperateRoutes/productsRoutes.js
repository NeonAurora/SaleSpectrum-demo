import express from "express";
import { addProduct } from "../../controllers/DatabaseControllers/addQuery.js";
import { searchProduct } from "../../controllers/DatabaseControllers/getQuery.js";
import { deleteProduct } from "../../controllers/DatabaseControllers/removeQuery.js";
import { updateProduct } from "../../controllers/DatabaseControllers/setQuery.js";

const router = express.Router();

// Router definitions
router.post("/add", addProduct);
router.get("/search/:id", searchProduct);
router.delete("/delete/:_id", deleteProduct);
router.put("/update/:id", updateProduct);

export default router;
