import { Schema,model } from "mongoose";
import { Tteacher } from "../types/Models";
import bcrypt from 'bcrypt'

const teacherSchema = new Schema<Tteacher>({
    name:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    token:{
      type:String,
    }
})

teacherSchema.pre('save', async function (next) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (error:any) {
      next(error);
    }
  });
  // Method to validate a password during login
  teacherSchema.methods.validatePassword = async function (password:string) {
    try {
      return await bcrypt.compare(password, this.password);
    } catch (error) {
      throw error;
    }
  };

  
export default model<Tteacher>('Teacher',teacherSchema)