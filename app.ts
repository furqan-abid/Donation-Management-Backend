import cors from 'cors'
import express from 'express'
import ErrorMiddleware from './middlewares/error';

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

app.use(ErrorMiddleware)
export default app;
