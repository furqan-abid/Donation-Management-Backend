import express from 'express'
import { deleteInvestor, getAllInvestors, getsingleInvestor, investFunds } from '../controllers/investorContorller'

const router = express.Router()

router.route("/investor/investfunds").post(investFunds)
router.route("/investor/all").get(getAllInvestors)
router.route("/investor/single/:id").get(getsingleInvestor)
router.route("/investor/delete/:id").delete(deleteInvestor)

export default router