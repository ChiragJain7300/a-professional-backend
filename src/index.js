import { configDotenv } from "dotenv";
import { DB_NAME } from "../src/constants.js";
import { connectDb } from "./db/index.js";
import { app } from "./app.js";
configDotenv({ path: "../.env" });

connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.log("The error is ", error);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`The server is listening on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error !!!", err);
  });
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
