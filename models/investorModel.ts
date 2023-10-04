import { model, Model,Schema } from "mongoose";
import { Tinvestor, Tstudent } from "../types/Models";
const investorSchema = new Schema<Tinvestor>({
    name:{
        type:String,
        required:true
    },
    fundsContributed:{
        type:Number,
        required:true
    },
    dateJoined:{
        type:String,
        required:true
    }
})

export default model<Tinvestor>('Investor',investorSchema)