import { injectable, inject } from "tsyringe";
import { Request, Response, NextFunction } from 'express';

import ISkeletonController from "./ISkeletonController";
import ISkeletonService from "../../services/Skeleton/ISkeletonService";
import ISkeletonDTO from "../../dto/ISkeletonDTO";

@injectable()
export default class SkeletonController implements ISkeletonController {

  constructor(
    @inject("SkeletonService")
    private service: ISkeletonService
  ) {}

  

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log(`SkeletonController: create: ${JSON.stringify(req.body)}`);
    let skeletonDto: ISkeletonDTO = req.body;
    try {
      let result = await this.service.create(skeletonDto);
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log(`SkeletonController: getAll`);
    try {
      let result = await this.service.getAll();
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  // getById = async (req: Request, res: Response, next: NextFunction) => {
  //   console.log(`SkeletonController: getById`);
  //   this.service.getById();
  // };

  // update = async (req: Request, res: Response, next: NextFunction) => {
  //   console.log(`SkeletonController: update`);
  //   this.service.update();
  // };

  // delete = async (req: Request, res: Response, next: NextFunction) => {
  //   console.log(`SkeletonController: delete`);
  //   this.service.delete();
  // };
}
