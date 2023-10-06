import express from 'express'
import { getAllStudents, getSingleStudent, grantStudentDonation } from '../controllers/studentController'

const router = express.Router()


router.route("/student/all").get(getAllStudents)
router.route("/student/single/:id").get(getSingleStudent)
router.route("/student/grantdonation").post(grantStudentDonation)

export default router