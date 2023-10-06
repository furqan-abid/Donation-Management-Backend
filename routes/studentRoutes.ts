import express from 'express'
import { getAllStudents, grantStudentDonation } from '../controllers/studentController'

const router = express.Router()


router.route("/student/all").get(getAllStudents)
router.route("/student/grant/donation").post(grantStudentDonation)

export default router