import { Router } from "express";
import catchAsyncError from "../middlewares/catchAsyncError";
import teacherModel from "../models/teacherModel";
import { Tteacher } from "../types/Models";
import ErrorHandler from "../utlis/errorHandler";

export const registerUser = catchAsyncError(async(req,res,next)=>{
    const {
        name,
        department,
        email,
        password
    }:Tteacher=req.body

    const missingFields:string[] = []

    if(!name){
        missingFields.push('Name')
    }
    if(!department){
        missingFields.push('Department')
    }
    if(!email){
        missingFields.push('Email')
    }
    if(!password){
        missingFields.push('Password')
    }
    if(missingFields.length>0){
        return next(new ErrorHandler(`Missing fields: ${missingFields.toString()}`,400))
    }
    const user = await teacherModel.create({
        name,
        department,
        email,
        password
    })

    res.status(200).json({
        success:true,
        message:"User created successfully...",
        user
    })
})