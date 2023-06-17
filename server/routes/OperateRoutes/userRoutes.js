import express from "express";
import { addStat } from "../../controllers/DatabaseControllers/addQuery.js";
import { searchStat } from "../../controllers/DatabaseControllers/getQuery.js";
import { deleteStat } from "../../controllers/DatabaseControllers/removeQuery.js";
import { updateStat } from "../../controllers/DatabaseControllers/setQuery.js";

const router = express.Router();

router.post("/add", addStat);
router.get("/search/:id", searchStat);
router.delete("/delete/:_id", deleteStat);
router.put("/update/:id", updateStat);

export default router;
