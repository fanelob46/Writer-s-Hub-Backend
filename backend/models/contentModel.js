import mongoose from 'mongoose';

const ContentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genres: {
      type: [String], 
      default: [],
    },
    likesCount: {
      type: Number,
      default: 0,
    },
    commentsCount: {
      type: Number,
      default: 0, 
    },
  },
  {
    timestamps: true, 
  }
);

const Content = mongoose.model('Content', ContentSchema);

export default Content;
