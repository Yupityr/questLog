import express from 'express';
import Chapter from '../models/Chapter.js';

import {
  getChapters,
  createChapter,
  updateChapter,
  deleteChapter,
} from '../controllers/chapterController.js';


const router = express.Router();

// GET /chapters
router.get('/', getChapters);

// POST /chapters
router.post('/', createChapter);

// PATCH /chapters/:id
router.patch('/:id', updateChapter);

// DELETE /chapters/:id
router.delete('/:id', deleteChapter);

const chapterRoutes = router;
export default chapterRoutes;