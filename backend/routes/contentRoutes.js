import express from "express";
import { createContent } from "../controllers/content/create.js";
import { getAllContent } from "../controllers/content/getAllContent.js";
import { updateContent } from "../controllers/content/updateContent.js";
import { deleteContent } from "../controllers/content/delete.js";
import { getContentByUser } from "../controllers/content/getContentByUser.js";
import { getContentId } from "../controllers/content/getContentId.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createContent);
router.get("/", getAllContent);
router.get("/user", protect, getContentByUser);
router.get("/:id", getContentId);
router.put("/:id", updateContent);
router.delete("/:id", deleteContent);

export default router;
