import catchAsyncError from "../middlewares/catchAsyncError";
import studenModel from "../models/studenModel";
import ErrorHandler from "../utlis/errorHandler";
import { Tstudent } from "../types/studentModel";

export const getAllStudents = catchAsyncError(async (req,res,next)=>{
    const students = await studenModel.find()
    if(students){
        res.status(200).json({
            succes:true,
            students
        })
    }
})