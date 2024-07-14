import express from 'express';
import { SendMassage } from '../controllers/massageController.js';
import Auth from '../middleware/authentication.js';

let router = express.Router()

router.route("/send/:id").post(Auth,SendMassage)

export default router