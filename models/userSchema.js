import mongoose from "mongoose";

let userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique:true
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum:["mail", "femail"],
      required: true,
    },
    profilePhoto: {
      type: String,
      default:""
    },
  },
  { timestamps: true }
);

let User = mongoose.model("User", userSchema);
export default User;
