import  express  from "express";
import { registerUser } from "../controllers/authController";

const router = express.Router()

router.route('/user/new').post(registerUser)

export default router