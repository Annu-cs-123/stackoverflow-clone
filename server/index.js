import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRouter from "./routes/users.js";
import questionRouter from "./routes/Questions.js";
import answerRouter from "./routes/Answers.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.get("/", (req, res) => {
  res.send("This is a stack overflow clone API");
});

app.use("/user", userRouter);
app.use("/questions", questionRouter);
app.use("/answer", answerRouter);

const PORT = process.env.PORT || 5000;

const CONNECTION_URL =
  "mongodb+srv://admin:admin@stack-overflow-clone.ila9sdj.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION_URL, { useNewURLParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
