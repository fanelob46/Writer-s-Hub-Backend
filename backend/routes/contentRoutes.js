import express from "express";
import { createContent } from '../controllers/content/create.js'
import { getAllContent } from '../controllers/content/getAllContent.js'
import { updateContent } from '../controllers/content/updateContent.js'
import { deleteContent } from "../controllers/content/delete.js";
import { getContentByUser } from "../controllers/content/getContentByUser.js";
import { getContent } from "../controllers/content/getContent.js";

const router = express.Router();

router.post("/", createContent);
router.get("/", getAllContent);
router.get("/content", getContent);
router.route("/:id").put(updateContent).get(getContentByUser);
router.delete("/:id", deleteContent);

export default router;
