import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

const port = 5000;

// http get request
app.get("/", (req, res) => {
  res.status(201).json("Home get Request");
});

// start server
app.listen(port, () => {
  console.log(`Server connected to http://localhost:${port}`);
});
