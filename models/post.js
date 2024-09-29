import mongoose, { models, Schema } from "mongoose";

const postSchema = new Schema(
  {
    houseNumber: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    preferance: {
      type: String,
      required: true,
    },
    rent: {
      type: String,
      required: true,
    },
    roommates: {
      type: String,
      required: true,
    },
    bhk: {
      type: String,
      required: true,
    },
    utilities: {
      type: String,
      required: true,
    },
    userEmail : {
      type : String,
      required : true
    },
    contact : {
      type : String,
      required : true
    },
  },
  {
    timestamps: true,
  }
);

const Post = models.Post || mongoose.model("Post", postSchema);
export default Post;