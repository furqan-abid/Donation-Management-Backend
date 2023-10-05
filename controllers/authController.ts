import { Router } from "express";
import catchAsyncError from "../middlewares/catchAsyncError";
import teacherModel from "../models/teacherModel";
import { Tteacher } from "../types/Models";
import ErrorHandler from "../utlis/errorHandler";
import jwt from 'jsonwebtoken'

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

export const getAllUsers = catchAsyncError(async (req,res,next)=>{
    const users = await teacherModel.find()
    res.status(200).json({
        success : true ,
        users
    })
})


export const loginUser = catchAsyncError(async (req,res,next)=>{
    const{email,password} = req.body;

    if(!email || !password){
        return next(new ErrorHandler("please enter email and password",400))
    }

    const user = await teacherModel.findOne({email}).select("+password")

    if(!user){
        return next(new ErrorHandler("invalid email or password",400))
    }

    const isPasswordMatched = await user.validatePassword(password)

    if(!isPasswordMatched){
        return next(new ErrorHandler("invalid email or password",400))
    }

    const token = jwt.sign({
        id:user._id,
        name:user.name,
        email:user.email,
        department:user.department
    },
    process.env.PRIVATE_KEY!
    )

    await teacherModel.findByIdAndUpdate(user._id,{
        token:token
    })

    res.status(200).json({
        success:true,
        user,
        token
    })
})