import express, { Application } from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet'

import indexRoutes from './routes/index.routes';
import booksRoutes from './routes/books.routes';
import authorsRoutes from './routes/authors.routes';

const app: Application = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(helmet());


app.use(indexRoutes);
app.use('/books', booksRoutes);
app.use('/authors', authorsRoutes)


export default app;