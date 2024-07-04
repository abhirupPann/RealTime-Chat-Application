import { Router } from "express";
import protectUser from "../middlewares/protectUser.middleware.js";
import { sideBarUser } from "../controllers/sidebar.controller.js";
const router =  Router();


router.get("/", protectUser, sideBarUser );

export default router;