import catchAsyncError from "../middlewares/catchAsyncError";
import balanceModel from "../models/balanceModel";
import studentModel from "../models/studenModel";
import ErrorHandler from "../utlis/errorHandler";

export const getAllStudents = catchAsyncError(async (req, res, next) => {
  const students = await studentModel.find().select("-loanReturned");
  if (!students) {
    return next(new ErrorHandler("no student found", 404));
  }
  res.status(200).json({
    success: true,
    students,
  });
});

export const getSingleStudent = catchAsyncError(async (req, res, next) => {
    const student = await studentModel.findById(req.params.id).select("-loanReturned");
    if (!student) {
      return next(new ErrorHandler("no student found", 404));
    }
    res.status(200).json({
      success: true,
      student,
    });
  });

export const grantStudentDonation = catchAsyncError(async (req, res, next) => {
  const {
    name,
    email,
    department,
    smester,
    section,
    reason,
    fatherName,
    fatherOcuupation,
    fatherPhone,
    financialNeed,
    financialType,
  } = req.body;
  
  const missingFields:(string|number)[] = [];

  for (const field in req.body) {
    if (!req.body[field]) {
      missingFields.push(field);
    }
  }

  if (missingFields.length > 0) {
    return next(
      new ErrorHandler(`Missing fields: ${missingFields.join(", ")}`, 400)
    );
  }

  const balance = await balanceModel.findOne({});

  if (balance?.totalBalance && balance?.totalBalance > financialNeed) {
    const newstudent = await studentModel.create({
      name,
      email,
      department,
      smester,
      section,
      reason,
      fatherName,
      fatherOcuupation,
      fatherPhone,
      financialNeed,
      financialType,
    });
    res.status(200).json({
      succes: true,
      message: "donation granted successfully",
      newstudent,
    });
    balance.totalBalance -= financialNeed
    await balance.save()
  } else {
    return next(
      new ErrorHandler(
        `not sufficient balance. current balance is ${
          balance?.totalBalance ? balance?.totalBalance : 0
        }`,
        403
      )
    );
  }
});


export const deleteStudent = catchAsyncError(async (req,res,next)=>{
  console.log(req.params.id);
  let student = await studentModel.findByIdAndDelete(req.params.id);

if(!student){
  return next(new ErrorHandler("No student found with this id",404))
}
    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
})

export const returnLoan = catchAsyncError(async (req,res,next)=>{
  let returnedAmount:number = req.body.amount
  let student = await studentModel.findById(req.params.id).select("+loanReturned");
  let balance = await balanceModel.findOne({})
  if(!student){
    return next(new ErrorHandler("Student not found",404))
  }
  if(student.financialType!=="loan"){
    return next(new ErrorHandler("Financial type is not loan",403))
  }
  if(student.financialNeed<(student!.loanReturned+returnedAmount)){
    return next(new ErrorHandler(`Returned loan is more than financial need your remaining loan is ${student.financialNeed-student.loanReturned}`,403))
  }

  student.loanReturned += returnedAmount
  student.save()
  balance!.totalBalance += returnedAmount
  balance!.save()
  res.status(200).json({
    success:true,
    message:`loan return successfully remaining loan is ${student.financialNeed-returnedAmount}`,
})

})