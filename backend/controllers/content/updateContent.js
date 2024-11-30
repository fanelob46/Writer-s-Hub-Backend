import expressAsyncHandler from "express-async-handler";
import Content from '../../models/contentModel.js'

export const updateContent = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;

    const content = await Content.findById(id);

    if (content) {
        content.genres = req.body.genres || content.genres;
        content.likesCount = req.body.likesCount || content.likesCount;
        content.commentsCount = req.body.commentsCount || content.commentsCount;

        const updatedContent = await content.save();

        res.status(200).json({
            success: true,
            message: 'Content updated successfully!',
            data: updatedContent
        });
    } else {
        res.status(400);
        throw new Error('Unsuccessful');
    }
});