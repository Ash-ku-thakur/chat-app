import mongoose from "mongoose";
let Schema =  mongoose.Schema

let userSchema = new mongoose.Schema(
  {
    _id: Schema.Types.UUID,
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    //   profilePhoto: {
    //     type: String,
    //     required: true,
    //   },
  },
  { timestamps: true }
);

let User = mongoose.model("User", userSchema);
export default User