import { Schema, model} from "mongoose";
import { Tbalance } from "../types/Models";

const balanceSchema = new Schema<Tbalance>({
    totalBalance:{
        type:Number,
        required:true,
        default:0
    }
})

export default model<Tbalance>("Balance",balanceSchema)