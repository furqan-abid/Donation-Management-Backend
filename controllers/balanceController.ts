import catchAsyncError from "../middlewares/catchAsyncError";
import balanceModel from "../models/balanceModel";

export const addBalance = catchAsyncError(async (req,res,next)=>{
    let {amount} = req.body;
    const balance = await balanceModel.findOne({})
    if(balance?.totalBalance){
        balance.totalBalance +=amount
        await balance.save()
        res.status(200).json({
            success:true,
            message:"blance created",
            balance
        })
    }
    else{
        balanceModel.create({totalBalance:amount})
        res.status(200).json({
            success:true,
            message:"blance created",
            amount
        })
    }
})


export const getTotalBalance = catchAsyncError(async (req,res,next)=>{
    const balance = await balanceModel.findOne({})
    const amount = balance?.totalBalance
    res.status(200).json({
        success:true,
        message:"total balance...",
        amount
    })
})