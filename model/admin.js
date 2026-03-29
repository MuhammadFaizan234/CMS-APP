import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    Title: { type: String, required: true },
    Body: { type: String, required: true },
  },
  { timestamps: true },
);

export const post = mongoose.model("post", schema);
