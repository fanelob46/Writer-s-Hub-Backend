import mongoose from 'mongoose';

const TypeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  }
});

const Type = mongoose.model("Type", TypeSchema);

export default Type;