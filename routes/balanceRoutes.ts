import express from 'express'
import { addBalance ,getTotalBalance} from '../controllers/balanceController'

const router = express.Router()

router.route("/addbalance").post(addBalance)
router.route("/totalbalance").get(getTotalBalance)

export default router