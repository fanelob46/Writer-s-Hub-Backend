import Content from "../../models/contentModel.js";

export const createContent = async (req, res) => {
    const content = req.body;
  
    if (
      !content.userId ||
      !content.username ||
      !content.author ||
      !content.genres
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all the required fields" });
    }
  
    const newContent = new Content(content);
  
    try {
      await newContent.save();
      return res
        .status(201)
        .json({ success: true, message: "Content created successfully" });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error creating content",
        error: error.message,
      });
    }
  };
  