import express from 'express'
import { getAllStudents, grantStudentDonation } from '../controllers/studentController'

const router = express.Router()


router.route("/student/all").get(getAllStudents)
router.route("/student/grantdonation").post(grantStudentDonation)

export default router