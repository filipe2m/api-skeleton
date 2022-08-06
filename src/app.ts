import "reflect-metadata";
import './shared/container';
import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import Routes from "./routes/Routes";

export class App {

    public app: express.Application = express();
    public routes: Routes = new Routes();
    public mongoUrl: string = 'mongodb+srv://filipe2m:LrPavnrIxQb1Ckcy@cluster0.1gqcc.mongodb.net/apiskeleton?retryWrites=true&w=majority';  

    constructor() {
        this.config();
        this.mongoSetup();
        this.routes.skeleton.routes(this.app);

    }

    private config(): void{
        this.app.use(cors());
        this.app.use(express.json());   
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);        
    }
}

export const datasource = {
    repository: 'mongo'
};

export default new App().app;