import  express  from "express";
import { getAllUsers, loginUser, registerUser } from "../controllers/authController";
import { isAuthenticated } from "../middlewares/auth";

const router = express.Router()

router.route('/user/new').post(registerUser)
router.route('/users/all').get(isAuthenticated,getAllUsers)
router.route('/user/login').put(loginUser)

export default router