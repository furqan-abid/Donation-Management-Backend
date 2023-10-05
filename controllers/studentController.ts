import catchAsyncError from "../middlewares/catchAsyncError";
import studenModel from "../models/studenModel";

export const getAllStudents = catchAsyncError(async (req,res,next)=>{
    const students = await studenModel.find()
    if(students){
        res.status(200).json({
            succes:true,
            students
        })
    }
})