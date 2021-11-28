import dotenv from 'dotenv';
import express, { Application } from 'express';
dotenv.config();

import routers from './routers'

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('api', routers);

export default app;
