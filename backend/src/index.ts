import express from "express";
import cors from "cors";

import dotenv from "dotenv";
import mongoose from "mongoose";
import { productRouter } from "./routers/productRouter";
import { seedRouter } from "./routers/seedRouter";
import { userRouter } from "./routers/userRouter";
import { orderRouter } from "./routers/orderRouter";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/amazonadb";
mongoose.set("strictQuery", true);
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(() => {
    console.log("can't connect to mongodb");
  });

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/seed", seedRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log("App running at port:" + PORT);
});
