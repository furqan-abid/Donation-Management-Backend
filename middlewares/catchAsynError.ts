const { Request, Response, NextFunction } = require('express');
import { NextFunction, Request, Response } from 'express';
import {catchAsynErrorFunc} from '../types/catchAsynErrors'


module.exports=(theFunc:catchAsynErrorFunc)=>(req:Request,res:Response,next:NextFunction)=>{
    Promise.resolve(theFunc(req,res,next)).catch(next);
}