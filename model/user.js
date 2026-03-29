import mongoose from "mongoose";

const userschema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    address: { type: String, required: false },
  },
  { timestamps: true },
);

export const user = mongoose.model("user", userschema);
