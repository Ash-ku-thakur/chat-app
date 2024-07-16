import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/dbConnection.js";
import userRouter from "./routers/userRouter.js";
import massageRouter from "./routers/massageRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config({});
dbConnection();

let app = express();

// middelware
let corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(express.urlencoded({ extended: true })); // form se data ayga
app.use(express.json()); // data json me ayga
app.use(cookieParser()); // get the cookie value
app.use(cors(corsOption));

// routers
app.use("/api/v1/user", userRouter);
app.use("/api/v1/massage", massageRouter);

app.listen(process.env.PORT, (req, res) => {
  console.log(`server started on ${process.env.PORT}`);
});
