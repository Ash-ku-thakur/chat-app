import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/dbConnection.js";
import userRouter from "./routers/userRouter.js";

dotenv.config({});
dbConnection();

let app = express();

// middelware
app.use(express.urlencoded({extended:true})) // form se data ayga
app.use(express.json()) // data json me ayga

// routers
app.use("/api/v1/user", userRouter);

app.listen(process.env.PORT, (req, res) => {
  console.log(`server started on ${process.env.PORT}`);
});
