import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

configDotenv();

export const connectDb = async () => {
  try {
    const connString = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("\n mongoDB connected!! at", connString.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
