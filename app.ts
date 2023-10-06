import cors from 'cors'
import express from 'express'
import ErrorMiddleware from './middlewares/error';
import userRoutes from './routes/userRoutes'
import studentRoutes from './routes/studentRoutes'
import balanceRoutes from './routes/balanceRoutes'
import investorRoutes from './routes/investorRoutes'

import morgan from 'morgan'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: '*',
    optionsSuccessStatus: 200,
  })
);
app.use(morgan('dev'))

app.use('/api/v1',userRoutes)
app.use('/api/v1',studentRoutes)
app.use('/api/v1',balanceRoutes)
app.use('/api/v1',investorRoutes)

app.use(ErrorMiddleware)
export default app;
