import express from "express";
import { addOverallStat } from "../../controllers/DatabaseControllers/addQuery.js";
import { searchOverallStat } from "../../controllers/DatabaseControllers/getQuery.js";
import { deleteOverallStat } from "../../controllers/DatabaseControllers/removeQuery.js";
import { updateOverallStat } from "../../controllers/DatabaseControllers/setQuery.js";

const router = express.Router();

// Router definitions
router.post("/add", addOverallStat);
router.get("/search/:id", searchOverallStat);
router.delete("/delete/:_id", deleteOverallStat);
router.put("/update/:id", updateOverallStat);

export default router;
