import expressAsyncHandler from "express-async-handler";
import Content from "../../models/contentModel.js";

export const updateContent = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { genres, description, image, title } = req.body;

  const content = await Content.findById(id);

  if (content) {
    content.genres = genres || content.genres;
    content.description = description || content.description;
    content.image = image || content.image;
    content.title = title || content.title;

    const updatedContent = await content.save();

    res.status(200).json({
      success: true,
      message: "Content updated successfully!",
      data: updatedContent,
    });
  } else {
    res.status(400);
    throw new Error("Unsuccessful");
  }
});
