import User from "../../models/userModel.js";
import asyncHandler from "express-async-handler"

export const getUserProfile = asyncHandler( async (req, res) => {
  const user = await User.findById(req.user._id);

  const { password, ...userWithoutPassword } = user.toObject();

  if (user) {
    res.json({
      success: true,
      message: "user profile info",
      data: userWithoutPassword,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
