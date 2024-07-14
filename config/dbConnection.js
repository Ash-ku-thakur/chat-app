import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({})

let dbConnection = async () => {
  try {
    let connection = await mongoose.connect(process.env.MONGO_URI);

    if (!connection) {
      console.log("db not connected");
    } else {
      console.log("db connected successfully");
    }
  } catch (error) {
    console.log(error);
  }
};
export default dbConnection;
