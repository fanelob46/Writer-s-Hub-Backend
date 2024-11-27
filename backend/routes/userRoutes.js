import express from "express";
import { registerUser } from "../controllers/users/register.js";
import { loginUser } from "../controllers/users/login.js";
import { logoutUser } from "../controllers/users/logout.js";
import { updateProfile } from "../controllers/users/updateProfile.js";
import { getUserProfile } from "../controllers/users/getUserProfile.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);

//Update profile
router.put("/profile", updateProfile);

//Get profile
router.get("/profile", getUserProfile);

// Logout user
router.post("/logout", logoutUser);

export default router;
