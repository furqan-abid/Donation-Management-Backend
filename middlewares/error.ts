import { NextFunction, Request, Response } from "express";

const ErrorHandler = require ('../utlis/ErrorHandler')

module.exports = (err:any, req:Request, res:Response, next:NextFunction) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
  
    // Wrong Mongodb Id error
    if (err.name === "CastError") {
      const message = `Resource not found. Invalid: ${err.path}`;
      err = new ErrorHandler(message, 400);
    }
  
    // Mongoose duplicate key error
    if (err.code === 11000) {
      const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
      err = new ErrorHandler(message, 400);
    }
  
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  };