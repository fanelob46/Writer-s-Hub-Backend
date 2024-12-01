import User from "../../models/userModel.js";
import generateToken from "../../utils/generateToken.js";
import asyncHandler from "express-async-handler";

// @desc user login 
// @route POST users/login
// access PUBLIC
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    const { password, ...userWithoutPassword } = user.toObject();
    res.status(200).json({
      success: true,
      message: "Successfully logged into Writers HUb. Welcome!",
      data: userWithoutPassword,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
