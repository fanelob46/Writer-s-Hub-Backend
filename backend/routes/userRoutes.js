import express from "express";
import { registerUser } from "../controllers/users/register.js";
import { loginUser } from "../controllers/users/login.js";
import { logoutUser } from "../controllers/users/logout.js";
import { updateProfile } from "../controllers/users/updateProfile.js";
import { getUserProfile } from "../controllers/users/getUserProfile.js";
import { deleteUser } from "../controllers/users/deleteProfile.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);

//Update profile
router.put("/profile",protect, updateProfile);

//Get profile
router.get("/profile",protect, getUserProfile);

// Logout user
router.post("/logout", logoutUser);

//delete user
router.delete("/:id", protect, deleteUser);

export default router;
