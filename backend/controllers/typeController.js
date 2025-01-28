import asyncHandler from "express-async-handler";
import Type from "../models/typeModel.js";

export const getTypes = asyncHandler(async (req, res) => {
  const types = await Type.find({});

  if (types.length > 0) {
    res.status(200).json({
      data: types
    });
  } else {
    res.status(404);
    throw new Error('No Types');
  }
});

export const addType = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name)
    return res.status(400).json({ success: false, message: "Type name is required" });

  const type = await Type.create({ name });

  if (type) {
    res.status(201).json({
      message: "Type added successfully!",
      type
    })
  } else {
    res.status(400);
    throw new Error('Invalid type data');
  }
});