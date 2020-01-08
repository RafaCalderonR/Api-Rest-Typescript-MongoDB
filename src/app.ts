import morgan from 'morgan';
import express, { Application } from 'express'
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import compression from 'compression';



export class App {

    app;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        
        this.app.use(helmet())
        this.app.use(express.json());
    }

    private routes() {
        
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}