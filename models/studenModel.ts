import {model,Schema} from "mongoose";
import { Tstudent } from "../types/Models";

const studenSchema = new Schema<Tstudent>({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    department:{
        type:String,
        required:true,
    },
    smester:{
        type:Number,
        required:true
    },
    section:{
        type:String,
        required:true
    },
    fatherName:{
        type:String,
        required:true
    },
    fatherOcuupation:{
        type:String,
        required:true
    },
    fatherPhone:{
        type:Number,
        required:true
    },
    financialNeed:{
        type:Number,
        default:0
    },
    financialType:{
        type:String,
        enum:['Loan','Donation'],
        required:true
    },
    loanReturned:{
        type:Number,
        default:0
    }
})

export default model<Tstudent>('Student',studenSchema) 