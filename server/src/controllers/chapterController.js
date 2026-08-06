import Chapter from "../models/Chapter.js";

// GET all chapters
export const getChapters = async (req, res) => {
    try{
        const chapters = await Chapter.find();

        res.status(200).json(chapters);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// POST /chapters
export const createChapter = async (req, res) => {
  try {
    const chapter = await Chapter.create({
      ...req.body,
      legend: req.user._id
    });

    res.status(201).json(chapter);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// PATCH /chapters/:id
export const updateChapter = async (req, res) => {
  try {
    const updatedChapter = await Chapter.findOneAndUpdate(
      {
        _id: req.params.id,
        legend: req.user._id,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedChapter) {
      return res.status(404).json({
        message: 'Chapter not found',
      });
    }

    res.status(200).json(updatedChapter);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE /chapters/:id
export const deleteChapter = async (req, res) => {
  try {
    const deletedChapter = await Chapter.findOneAndDelete(
      {
        _id: req.params.id,
        legend: req.user._id
      }
    );

    if (!deletedChapter) {
      return res.status(404).json({
        message: 'Chapter not found',
      });
    }

    res.status(200).json({
      message: 'Chapter deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};