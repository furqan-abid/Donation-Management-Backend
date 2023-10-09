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
    totalLoan:number,
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
    token:string,
    validatePassword(password:string):Promise<boolean>
}

export interface Tbalance extends Document {
    totalBalance:number
}