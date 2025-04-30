import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
  },
  {
    timestamps: true,
  }
);

// Ensure the model is only created once
const blogDetail = mongoose.models.blog || mongoose.model("blog", blogSchema);

export default blogDetail;
