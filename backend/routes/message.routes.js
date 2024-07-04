import { Router } from "express";
import { getMessage, sendMessage } from "../controllers/message.controller.js";
import protectUser from "../middlewares/protectUser.middleware.js"

const router = Router();

router.get("/:id", protectUser, getMessage)
router.post("/send/:id", protectUser ,sendMessage) //protectUser is basically for senderId



export default router;