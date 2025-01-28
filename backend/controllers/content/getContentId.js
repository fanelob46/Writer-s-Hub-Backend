import mongoose from "mongoose";
import Content from "../../models/contentModel.js";

export const getContentId = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid ID format" });
  }


  try {
    const content = await Content.findById(id).populate({
      path: 'userId',
      select: 'username firstName lastName'
    });

    if (!content) {
      return res
        .status(404)
        .json({ success: false, message: "Content not found" });
    }
    res.status(200).json({
      _id: content._id,
      userId: content.userId,
      userName: content.username,
      author: content.author,
      title: content.title,
      description: content.description,
      image: content.image,
      type: content.type,
      genres: content.genres,
      likes: content.likesCount,
      comments: content.commentsCount,
      text: content.text
    });
  } catch (error) {
    console.log("Error fetching content:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
