import express from "express";
import { register, login, forgotPass, verifyOTP, resetPass } from "../../controllers/PanelControllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgotPass", forgotPass);
router.post("/verifyOTP", verifyOTP);
router.post("/resetPass", resetPass);

export default router;