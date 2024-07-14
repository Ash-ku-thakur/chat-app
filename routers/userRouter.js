import express from "express";
import {
  Login,
  Logout,
  OtherUsers,
  Register,
} from "../controllers/userController.js";
import Auth from "../middleware/authentication.js";

let router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/otherUser").get(Auth, OtherUsers);


export default router;
