import mongoose from "mongoose";

let conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    massages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Massage",
      },
    ],
  },
  { timestamps: true }
);

let Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;
