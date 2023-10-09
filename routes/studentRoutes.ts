import express from 'express'
import { deleteStudent, getAllStudents, getSingleStudent, grantStudentDonation, returnLoan } from '../controllers/studentController'

const router = express.Router()


router.route("/student/all").get(getAllStudents)
router.route("/student/single/:id").get(getSingleStudent)
router.route("/student/grantdonation").post(grantStudentDonation)
router.route("/student/delete/:id").delete(deleteStudent)
router.route("/student/returnloan/:id").patch(returnLoan)

export default router