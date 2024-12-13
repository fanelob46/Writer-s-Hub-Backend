import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import { connectDB } from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleWare.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import contentRoutes from "./routes/contentRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 

app.use("/api/users", userRoutes);
app.use("/api/content", contentRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
