import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Feast! welcome to youtube channel");
});

export default app;
