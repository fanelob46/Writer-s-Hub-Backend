import User from "../../models/userModel.js";
import asyncHandler from "express-async-handler";

// @desc user register
// @route POST users/
// access PUBLIC

export const registerUser = asyncHandler(async (req, res) => {
  const registerFormData = req.body;
  const { email, username } = req.body;

  const userExists = await User.findOne({ email, username });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  
  const createdUser = await User.create(registerFormData);
  if (createdUser) {
    res.status(201).json({
      success: true,
      message: "Successfully registered to Writers HUb. Welcome!",
      data: createdUser,
    });
  } else {
    res.status(400);
    throw new Error("Unfortunately your registration was unsuccessful");
  }
});
