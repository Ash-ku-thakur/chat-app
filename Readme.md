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

# register (create a user) with some fields

name, username, password, confirmPassword, gender

we can hash password with the help of bcrypt.hash method

we can set cookie after create a user with the help of jwt.sign method

# login a user
password, username

we can match the password with the help of bcrypt.comnfirm method

we can also set a cookie with the help of jwt.sign method


# logout a user
just set cookie empty


