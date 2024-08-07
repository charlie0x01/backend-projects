import dotenv from "dotenv";
dotenv.config();
import app from "./app";

const port = process.env.NODE_APP_PORT || 8000;

app.listen(port, () => {
  console.log(
    "\x1b[1;32m%s\x1b[0m",
    `Weather API is running on https://localhost:${port}`
  );
});
