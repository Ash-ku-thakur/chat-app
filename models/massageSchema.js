import mongoose from "mongoose";
let massageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    massage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

let Massage = mongoose.model("Massage", massageSchema);
export default Massage;
