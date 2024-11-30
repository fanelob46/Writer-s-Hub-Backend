import express from "express";
import { createContent } from '../controllers/content/create.js'
import { getAllContent } from '../controllers/content/getAllContent.js'
import { updateContent } from '../controllers/content/updateContent.js'
import { deleteContent } from "../controllers/content/delete.js";
import { getContentByUser } from "../controllers/content/getContentByUser.js";
import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/", createContent);
router.get("/", getAllContent);
router.get('/content/:id',);
router.get('/user', protect, getContentByUser);
router.route("/:id")
  .put(updateContent);


export default router;
