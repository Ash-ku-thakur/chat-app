import express from 'express';
import { Register } from '../controllers/userController.js';

let router = express.Router()

router.route("/register").post(Register)

export default router