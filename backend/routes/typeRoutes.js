import express from 'express';
import { addType, getTypes } from '../controllers/typeController.js';

const router = express.Router();

router.get('/', getTypes);
router.post('/', addType);

export default router;