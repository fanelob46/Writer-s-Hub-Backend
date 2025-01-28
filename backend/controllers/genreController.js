import asyncHandler from "express-async-handler";
import Genre from "../models/genreModel.js";

export const getGenres = asyncHandler(async (req, res) => {
  const genres = await Genre.find({});

  if (genres.length > 0) {
    res.status(200).json({
      data: genres
    });
  } else {
    res.status(404);
    throw new Error('No Genres');
  }
});

export const addGenre = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name)
    return res.status(400).json({ success: false, message: "Genre name is required" });

  const genre = await Genre.create({ name });

  if (genre) {
    res.status(201).json({
      message: "Genre added successfully!",
      genre
    })
  } else {
    res.status(400);
    throw new Error('Invalid genre data');
  }
});