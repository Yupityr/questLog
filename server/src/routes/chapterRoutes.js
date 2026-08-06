import express from 'express';
import Chapter from '../models/Chapter.js';
import { protect } from "../middleware/authMiddleware.js";

import {
  getChapters,
  createChapter,
  updateChapter,
  deleteChapter,
} from '../controllers/chapterController.js';


const router = express.Router();

// GET /chapters
router.get('/',protect, getChapters);

// POST /chapters
router.post('/',protect, createChapter);

// PATCH /chapters/:id
router.patch('/:id',protect, updateChapter);

// DELETE /chapters/:id
router.delete('/:id',protect, deleteChapter);

const chapterRoutes = router;
export default chapterRoutes;