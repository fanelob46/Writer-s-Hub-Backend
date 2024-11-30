import mongoose from 'mongoose';
import Content from '../../models/contentModel.js'; 

export const deleteContent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid id" });
  }

  try {
    await Content.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Content deleted successfully" });
  } catch (error) {
    console.log("Error in deleting content:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Error deleting content" });
  }
};
