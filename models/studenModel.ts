import mongoose,{Document,model,Schema} from "mongoose";

interface Tstudent extends Document {
    name:string,
    email:string,
    department:string,
    smester:number,
    section:string,
    balance:number,
}

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
    balance:{
        type: Number,
        default:0
    }
})

export default model<Tstudent>('Student',studenSchema) 