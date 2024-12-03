import mongoose from "mongoose";
import Content from "../../models/contentModel.js";
import asyncHandler from "express-async-handler";

export const deleteContent = asyncHandler(async (req, res) => {
  const { id } = req.params;

  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid ID format" });
  }
  const content = await Content.findByIdAndDelete(id);

  if (content) {
    res.status(200).json({
      success: true,
      message: "Content deleted successfully",
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Content not found",
    });
  }
});
