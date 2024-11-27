import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleWare.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser())



app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
