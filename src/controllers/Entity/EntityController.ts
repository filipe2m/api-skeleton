import { inject, injectable } from "tsyringe";
import IEntityController from "./IEntityController";
//import {EntityService} from "../services/EntityService";
import { Request, Response, NextFunction } from 'express';
import IEntityDTO from "../../dto/IEntityDTO";

@injectable()
export default class EntityController implements IEntityController {
  //private service: EntityService;

  constructor() {
      //this.service = new EntityService();      
  }

  post = async (req: Request, res: Response, next: NextFunction) => {
    console.log(`EntityController: post`);
    // let entityDto: IEntityDTO = req.body;
    // try {
    //     let result = await this.service.createEntity(entityDto);
    //     res.status(201).send(result);
    // }catch(err){
    //     res.status(500).send('Error While Creating Entity.');
    // }
  };

  get = async (req: Request, res: Response, next: NextFunction) => {
    console.log(`EntityController: get`);
    // try {
    //     let result = await this.service.getAllEntities();
    //     res.status(201).send(result);
    // }catch(err){
    //     res.status(500).send('Unable To Get All Entities.');
    // }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    console.log(`EntityController: getById`);
    // try {
    //     let result = await this.service.getEntityById(req.params.id);
    //     res.status(201).send(result);
    // }catch(err){
    //     res.status(500).send('Unable To Get Entity.');
    // }
  };

  put = async (req: Request, res: Response, next: NextFunction) => {
    console.log(`EntityController: put`);
    // let entityDto: IEntityDTO = req.body;
    // try {
    //     let result = await this.service.updateEntity(req.params.id, entityDto);
    //     res.status(201).send(result);
    // }catch(err){
    //     res.status(500).send('Error While Updating Entity.');
    // } 
  };

  patch = async (req: Request, res: Response, next: NextFunction) => {
    console.log(`EntityController: patch`);
    // let entityDto: IEntityDTO = req.body;
    // try {
    //     let result = await this.service.updateEntity(req.params.id, entityDto);
    //     res.status(201).send(result);
    // }catch(err){
    //     res.status(500).send('Error While Updating Entity.');
    // } 
  };
       
  delete = async (req: Request, res: Response, next: NextFunction) => {
    console.log(`EntityController: delete`);
    // try {
    //     let result = await this.service.deleteEntity(req.params.id);
    //     res.status(201).send(result);
    // }catch(err){
    //     res.status(500).send('Error While Deleting Entity.');
    // }
  };
}
