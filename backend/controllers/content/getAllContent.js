import expressAsyncHandler from "express-async-handler";
import Content from '../../models/contentModel.js'

export const getAllContent = expressAsyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = 20;
  const skip = (page - 1) * limit;

  const contents = await Content.find({})
    .populate({
      path: 'userId',
      select: 'username firstName lastName'
    })
    .skip(skip)
    .limit(limit);

  const totalContents = await Content.countDocuments({});

  if (contents.length > 0) {
    res.status(200).json({
      data: contents,
      page,
      pages: Math.ceil(totalContents / limit),
      totalContents
    });
  } else {
    res.status(404);
    throw new Error('No content found');
  }
})