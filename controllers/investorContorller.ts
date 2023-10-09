import catchAsyncError from "../middlewares/catchAsyncError";
import balanceModel from "../models/balanceModel";
import investorModel from "../models/investorModel";
import ErrorHandler from "../utlis/errorHandler";

export const investFunds = catchAsyncError(async (req, res, next) => {
  const { 
    name,
    fundsContributed,
    dateJoined } = req.body;

    const missingFields:string[] = []

    for(const field in missingFields){
        if(!req.body[field]){
            missingFields.push(field)
        }
    }
    if(missingFields.length>0){
        return next(
            new ErrorHandler(`Missing fields: ${missingFields.join(", ")}`, 400)
          );
    }

    const balance = await balanceModel.findOne({})
    if(!balance?.totalBalance){
        return next(
            new ErrorHandler(`balanace not found`, 404)
          );
    }
    balance.totalBalance += fundsContributed
    await balance.save()
    const investor  = await investorModel.create({name,fundsContributed,dateJoined})
    res.status(200).json({
        success:true,
        message:"funds invested successfully",
        newBalance:balance?.totalBalance,
        investor
    })
});

export const getAllInvestors = catchAsyncError(async (req,res,next)=>{
    const allInvestors=await investorModel.find();
    if(!allInvestors){
        return next(
            new ErrorHandler(`investors not found`, 404)
          );
    }
    res.status(200).json({
        success:true,
        message:"investors loaded successfully",
        allInvestors
    })
})

export const getsingleInvestor = catchAsyncError(async (req,res,next)=>{
    const Investor=await investorModel.findById(req.params.id);
    if(!Investor){
        return next(
            new ErrorHandler(`investor not found`, 404)
          );
    }
    res.status(200).json({
        success:true,
        message:"investor loaded successfully",
        Investor
    })
})

export const deleteInvestor = catchAsyncError(async (req,res,next)=>{
    // const deletedInvestor=await investorModel.deleteOne({"_id": req.params._id });
    const deletedInvestor=await investorModel.findByIdAndDelete(req.params._id );
    res.status(200).json({
        success:true,
        message:"investor deleted successfully",
        deletedInvestor
    })
})