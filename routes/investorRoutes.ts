import express from 'express'
import { getAllInvestors, getsingleInvestor, investFunds } from '../controllers/investorContorller'

const router = express.Router()

router.route("/investor/investfunds").post(investFunds)
router.route("/investor/all").get(getAllInvestors)
router.route("/investor/single/:id").get(getsingleInvestor)

export default router