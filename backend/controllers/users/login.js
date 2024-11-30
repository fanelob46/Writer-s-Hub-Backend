import User from "../../models/userModel.js";
import generateToken from "../../utils/generateToken.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      success: true,
      message: "Successfully logged into Writers HUb. Welcome!",
      data: user,
    });
  } else {
    res.status(401);
     throw new Error("Invalid email or password");
  }
};
