import mongoose from "mongoose";
import User from "../../models/userModel.js";
import asyncHandler from "express-async-handler";

export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid User ID" });
  }

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404);
      throw new Error("User not found");
    }
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error("Error in deleting user:", error.message);
    res.status(500);
    throw new Error("Server Error");
  }
});
