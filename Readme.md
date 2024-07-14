bcryptjs for pssword hashingand password conformation
cookie-parser for hanling cookies
cors for cors policy
dotenv for environment variable
express for routing & middelware
mongoose for database
nodemon for hot-reloding
socket.io for real-time communication connection


userSchema for create user
massageSchema for create massage
conversationSchema for kiskis ke bich , aur kiakia baat


# Array jisme jisjis ke bich baat hogi uski Ids
 participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],


# Array jisme dono ke bich ki sare massages ki Ids
  massages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Massage",
    },
  ],
