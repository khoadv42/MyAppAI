import express from "express";
import { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! 2");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
