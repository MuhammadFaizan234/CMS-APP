import mongoose from "mongoose";

export const connetmongodb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/CMS-APP");
    console.log("succes connect database");
  } catch (error) {
    console.log(`error ${error}`);
  }
};
