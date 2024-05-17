import {configDotenv } from "dotenv";
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "../src/constants.js";
import { connectDb } from "./db/index.js";
const app = express();

configDotenv({ path: "../.env" });

connectDb();
/*(async () => {
  try {
    const connString = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(connString.connection);
    app.on("error", (error) => {
      console.log("The error is ", error);
    });
    app.listen(process.env.PORT, () => {
      console.log(`The server is listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
*/
