import express from "express";
import {createContent} from '../controllers/content/create.js'
import {getAllContent} from '../controllers/content/getAllContent.js'
import {updateContent} from '../controllers/content/update.js'
import { deleteContent } from "../controllers/content/delete.js";

const router = express.Router();

router.post("/", createContent);
router.get("/", getAllContent);
router.put("/:id", updateContent);
router.delete("/:id", deleteContent);
