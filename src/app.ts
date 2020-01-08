import express, { Application } from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet'

import indexRoutes from './routes/index.routes';

const app: Application = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(helmet());


app.use('/api', indexRoutes);

app.use('/uploads', express.static(path.resolve('uploads')));

export default app;