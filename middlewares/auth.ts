import  Jwt, { JwtPayload }  from "jsonwebtoken";
import teacherModel from "../models/teacherModel";
import { catchAsynErrorFunc } from "../types/catchAsynErrors";
import ErrorHandler from "../utlis/errorHandler";

export const isAuthenticated:catchAsynErrorFunc =async (req,res,next) => {
    if(req.headers && req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1]

        try{
            const decode = Jwt.verify(token,process.env.PRIVATE_KEY!) as JwtPayload
            const user = await teacherModel.findById(decode.id)

            if(!user){
                return next(new ErrorHandler("Access denied login to access this resource",401))
            }
            next()
        }
        catch(error:any){
            if (error.name === "JsonWebTokenError") {
                return next(
                  new ErrorHandler(
                    `Access denied. login to access this resource...`,
                    401
                  )
                );
            }
            else{
                res.status(401).json({ success: false, message: "unauthorized access!" });
            }
        }
    }
    else{
        res.status(401).json({ success: false, message: "unauthorized access!" });
    }
}