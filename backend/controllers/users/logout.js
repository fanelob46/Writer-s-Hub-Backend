// @desc user logout
// @route POST users/logout
// access PRIVATE
export const logoutUser = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Sad to see you go" });
};
