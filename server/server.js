import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;
const db = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());

mongoose
  .connect(db, {})
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
