import Conversation from "../models/conversationSchema.js";
import Massage from "../models/massageSchema.js";

export let CreateMassage = async (req, res) => {
  try {
    let { massage } = req.body;
    let loggedinUserId = req.id;
    let receverId = req.params.id;

    let getPeoples = await Conversation.findOne({
      participants: { $all: [loggedinUserId, receverId] },
    });

    if (!getPeoples) {
      getPeoples = await Conversation.create({
        participants: [loggedinUserId, receverId],
      });
    }

    let createMassage = await Massage.create({
      senderId: loggedinUserId,
      receiverId: receverId,
      massage,
    });

    // if (createMassage) {
    //   getPeoples.massages.push(data);
    // }
    if (!getPeoples.massages.includes(createMassage._id)) {
      let ch = await Conversation.findByIdAndUpdate(
        getPeoples._id,
        {
          $push: { massages: createMassage._id },
        },
        { returnDocument: "after" }
      );

      return res.status(201).json({
        ch,
      });
    }

    // socket io
  } catch (error) {
    console.log(error);
  }
};

export let ReceveMassage = async (req, res) => {
  try {
    let receverId = req.params.id;
    let loggedinUserId = req.id;

    let findConversation = await Conversation.find({
      participants: { $all: [loggedinUserId, receverId] },
    }).populate("massages");

    return res.status(201).json({
      massages: "hy",
      findConversation,
    });
  } catch (error) {
    console.log(error);
  }
};
