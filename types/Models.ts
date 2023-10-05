import { Document } from "mongoose";

export interface Tstudent extends Document {
    name:string,
    email:string,
    department:string,
    smester:number,
    section:string,
    reason:string,
    fatherName:string,
    fatherOcuupation:string,
    fatherPhone:number,
    financialNeed:number,
    financialType:string,
    loanReturned:number
}

export interface Tinvestor extends Document {
    name:string,
    fundsContributed:number,
    dateJoined:string
}

export interface Tteacher extends Document{
    name:string,
    department: string,
    email:string,
    password:string,
}

export interface Tbalance extends Document {
    totalBalance:number
}