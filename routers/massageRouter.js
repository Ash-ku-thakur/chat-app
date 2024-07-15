import express from "express";
import {
  CreateMassage,
  ReceveMassage,
} from "../controllers/massageController.js";
import Auth from "../middleware/authentication.js";

let router = express.Router();

router.route("/send/:id").post(Auth, CreateMassage);
router.route("/:id").get(Auth, ReceveMassage);

export default router;
