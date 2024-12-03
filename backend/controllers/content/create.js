import Content from "../../models/contentModel.js";
import asyncHandler from "express-async-handler";

export const createContent = asyncHandler(async (req, res) => {
  const { title, image, description, type, genres } = req.body;

  const { _id, username, firstName, lastName } = req.user;

  if (!title || !image || !description || !type || !genres) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill all the required fields" });
  }

  const newContent = new Content({
    username,
    userId: _id,
    author: firstName + " " + lastName,
    genres,
    title,
    image,
    description,
    type,
  });
console.log(newContent)
  try {
    await newContent.save();
    return res
      .status(201)
      .json({ success: true, message: "Content created successfully" });
  } catch (error) {
    res.status(500);
    throw new Error("Error creating content");
  }
});
