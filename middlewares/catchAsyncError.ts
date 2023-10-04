import { NextFunction, Request, Response } from "express";

import {catchAsynErrorFunc} from '../types/catchAsynErrors'

export default (theFunc:catchAsynErrorFunc)=>(req:Request,res:Response,next:NextFunction)=>{
    Promise.resolve(theFunc(req,res,next)).catch(next);
}