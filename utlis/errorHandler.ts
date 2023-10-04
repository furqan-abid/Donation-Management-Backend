class errorHandler extends Error{
    public statusCode:number;
    constructor(message:string,statusCode:number){
        super(message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this,this.constructor); 
    }
}

module.exports = errorHandler