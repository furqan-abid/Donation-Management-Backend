import mongoose from "mongoose";


const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI!)
    .then((data) => {
        console.log(`mongodb connect with server ${data.connection.host}`);
    })
    .catch((error:Error) => {
        console.error("Error connecting to the database:", error);
    });
};

export default connectDatabase;
