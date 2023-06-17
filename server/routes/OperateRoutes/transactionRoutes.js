import express from "express";
import { addTransaction } from "../../controllers/DatabaseControllers/addQuery.js";
import { searchTransaction } from "../../controllers/DatabaseControllers/getQuery.js";
import { deleteTransaction } from "../../controllers/DatabaseControllers/removeQuery.js";
import { updateTransaction } from "../../controllers/DatabaseControllers/setQuery.js";
import { updateAudio } from "../../controllers/DatabaseControllers/setQuery.js";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/add", upload.single("audio"), addTransaction);
router.get("/search/:id", searchTransaction);
router.delete("/delete/:id", deleteTransaction);
router.put("/update/:id", updateTransaction);
router.put("/update-audio/:id", upload.single("newAudio"), updateAudio);

export default router;
