import express from "express";
import{ getuser, createuser } from "../controllers/user.js";

const router = express.Router()
router.get('/getuser', getuser)
router.post('/createuser', createuser)
export default router