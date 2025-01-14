import mongoose from 'mongoose';

const GenreSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  }
});

const Genre = mongoose.model("Genre", GenreSchema);

export default Genre;