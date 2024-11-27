import express from "express";
import { createContent } from '../controllers/content/create.js'
import { getAllContent } from '../controllers/content/getAllContent.js'
import { updateContent } from '../controllers/content/updateContent.js'
import { deleteContent } from "../controllers/content/delete.js";
import { getContentByUser } from "../controllers/content/getContentByUser.js";

const router = express.Router();

router.post("/", createContent);
router.get("/", getAllContent);
router.route("/:id").put(updateContent).get(getContentByUser);
router.delete("/:id", deleteContent);

export default router;
