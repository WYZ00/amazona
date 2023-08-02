import express, { Request, Response } from "express";
import cors from "cors";
import { sampleProducts } from "./data";

const app = express();
app.use(cors());
app.get("/api/products", (req: Request, res: Response) => {
  res.json(sampleProducts);
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log("App running at port:" + PORT);
});
