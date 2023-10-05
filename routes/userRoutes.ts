import  express  from "express";
import { getAllUsers, registerUser } from "../controllers/authController";

const router = express.Router()

router.route('/user/new').post(registerUser)
router.route('/users/all').get(getAllUsers)

export default router