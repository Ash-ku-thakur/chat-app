import User from "../models/userSchema.js";
import bcrypt from 'bcrypt';


export let Register = async (req, res) => {
  try {
    let { name, userName, email, password, gender } = req.body;

    // basic validation
    if (!name || !userName || !email || !password || !gender) {
      return res.status(401).json({
        massage: "Al fields are required",
        success: false,
      });
    }

    // check user present or not
    let findUser = await User.find({ email });

    //  if find
    if (!findUser) {
      return res.status(401).json({
        massage: "this email is already exist",
        success: false,
      });
    }

    // plain password convertef into hash formet

   let hashPassword = await bcrypt.hash(password, 10)

    // if not find
    await User.create({
      name,
      userName,
      email,
      password:hashPassword,
      gender,
    });

    return res.status(201).json({
        massage:"user created successfully",
        success:true
    })
  } catch (error) {
    console.log(error);
  }
};
