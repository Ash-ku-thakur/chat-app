import mongoose from "mongoose";

let dbConnection = async () => {
  try {
    let connection = await mongoose.connect("mongodb://127.0.0.1:27017/chat");

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
