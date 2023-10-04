import { NextFunction,Request,Response } from "express";

export type catchAsynErrorFunc = (req:Request,res:Response,next:NextFunction)=>Promise<any>