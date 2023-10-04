const App = require("./app");
const { config } = require("dotenv");
const ConnectDatabase = require("./config/database");

const path = 'config/config.env';
config({ path });

// Handling uncaught exceptions
process.on('uncaughtException', function (err) {
    console.log("Error: " + err.message);
    console.log('Shutting down the server due to uncaught exception');
    process.exit(1);
});

ConnectDatabase();

const server = App.listen(process.env.Port, () => {
    console.log(`Server is running on ${process.env.Port}`);
});

// Unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);
    server.close(() => {
        process.exit(1);
    });
});
