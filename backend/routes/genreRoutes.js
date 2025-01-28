import express from 'express';
import { addGenre, getGenres } from '../controllers/genreController.js';

const router = express.Router();

router.get('/', getGenres);
router.post('/', addGenre);

export default router;