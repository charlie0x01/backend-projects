import express, { Application, Request, Response } from "express";

// init app
const app: Application = express();

// testing route
app.get("/", (req: Request, res: Response) => {
  return res.send("Welcome to Weather APIs.");
});

export default app;
