import express from "express";
import { addCustomTrade } from "../../controllers/DatabaseControllers/addQuery.js";
// import { searchCustomTrade } from "../../controllers/DatabaseControllers/getQuery.js";
// import { deleteCustomTrade } from "../../controllers/DatabaseControllers/removeQuery.js";
import { updateCustomTrade } from "../../controllers/DatabaseControllers/setQuery.js";
import { updateCustomAudio } from "../../controllers/DatabaseControllers/setQuery.js";
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

router.post("/add", upload.single("audio"), addCustomTrade);
// router.get("/search/:id", searchCustomTrade); 
// router.delete("/delete/:id", deleteCustomTrade);
router.put("/update/:id", updateCustomTrade);
router.put("/update-audio/:id", upload.single("newAudio"), updateCustomAudio);

export default router;
