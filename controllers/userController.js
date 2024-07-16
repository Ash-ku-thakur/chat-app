import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({});

// create a new user
export let Register = async (req, res) => {
  try {
    let { name, username, password, confirmPassword, gender } = req.body;

    // basic validation
    if (!name || !username || !password || !confirmPassword || !gender) {
      return res.status(401).json({
        massage: "Al fields are required",
        success: false,
      });
    }

    // password is correct or not
    if (password != confirmPassword) {
      return res.status(401).json({
        massage: "password doesn't match",
        success: false,
      });
    }

    // check user present or not
    let findUser = await User.findOne({ username });

    //  if find
    if (findUser) {
      return res.status(401).json({
        massage: "This username is already exist",
        success: false,
      });
    }

    // plain password convertef into hash formet
    let hashPassword = await bcrypt.hash(password, 10);

    // profilephoto
    let mailProfilePhoto = `https://avatar.iran.liara.run/public/boy?name=${name}`;
    let femailProfilePhoto = `https://avatar.iran.liara.run/public/girl?name=${name}`;

    // if not find
    let userCreated = await User.create({
      name,
      username,
      password: hashPassword,
      profilePhoto: gender === "mail" ? mailProfilePhoto : femailProfilePhoto,
      gender,
    });

    // i want to send a token here

    let token = await jwt.sign(
      { userId: userCreated._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );

    return res
      .status(201)
      .cookie("uid", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 1 * 24 * 60 * 60 * 1000,
      })
      .json({
        massage: "user created successfully",
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

// login
export let Login = async (req, res) => {
  try {
    let { username, password } = req.body;

    // basic validation
    if (!username || !password) {
      return res.status(401).json({
        massage: "All fields are required",
        success: false,
      });
    }

    // find user
    let user = await User.findOne({ username });

    // find or not
    if (!user) {
      return res.status(401).json({
        massage: "password doesn't match",
        success: false,
      });
    }

    let isPasswordMatch = await bcrypt.compare(password, user.password);

    // if password is not match
    if (!isPasswordMatch) {
      return res.status(401).json({
        massage: "username or password is not match",
        success: false,
      });
    }

    // token send keryege
    let token = await jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );

    return res
      .status(201)
      .cookie("uid", token, {
        httpOnly: true,
        sameSite: "strict",
        // secure: true,
        maxAge: 1 * 24 * 60 * 60 * 1000,
      })
      .json({
        massage: `welcome back ${user.name}`,
        success: true,
        confirmUser: user,
      });
  } catch (error) {
    console.log(error);
  }
};

// logout
export let Logout = (req, res) => {
  try {
    return res
      .status(201)
      .cookie("uid", "", { maxAge: 0, sameSite: "strict", httpOnly: true })
      .json({
        massage: "user successfully log out",
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

// other users
export let OtherUsers = async (req, res) => {
  try {
    let loggedinUserId = req.id;

    // basic validation
    if (!loggedinUserId) {
      return res.status(401).json({
        massage: "you are not authenticated",
        success: false,
      });
    }

    let loggedinUser = await User.find({ _id: { $ne: loggedinUserId } }).select(
      "-password"
    );
    return res.status(201).json({
      loggedinUser,
    });
  } catch (error) {
    console.log(error);
  }
};
