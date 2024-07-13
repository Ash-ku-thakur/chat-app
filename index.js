import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/dbConnection.js";
import userRouter from "./routers/userRouter.js";

dotenv.config({});
dbConnection();

let app = express();

// middelware

// routers
app.use("/api/v1/user", userRouter);

app.listen(process.env.PORT, (req, res) => {
  console.log(`server started on ${process.env.PORT}`);
});
