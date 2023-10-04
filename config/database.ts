const mongoose = require("mongoose");
const {Connection} = require('mongoose')

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((data:typeof Connection) => {
        console.log(`mongodb connect with server ${data.connection.host}`);
    })
    .catch((error:Error) => {
        console.error("Error connecting to the database:", error);
    });
};

module.exports = connectDatabase;
