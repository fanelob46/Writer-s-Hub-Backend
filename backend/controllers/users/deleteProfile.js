import mongoose from "mongoose";
import User from "../../models/userModel.js";



export const deleteUser = async (req, res) => {
  const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ success: false, message: "Invalid User ID" });
//   }

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error("Error in deleting user:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};