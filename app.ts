const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: '*',
    optionsSuccessStatus: 200,
  })
);
console.log("working 2");

module.exports = app;
