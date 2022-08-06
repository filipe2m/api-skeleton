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
    const skeletonDto: ISkeletonDTO = req.body;
    try {
      const result = await this.service.create(skeletonDto);
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

  getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log(`SkeletonController: getById: ${req.params.id}`);
    const id: string = req.params.id;
    try {
      const result = await this.service.getById(id);
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log(`SkeletonController: update: ${req.params.id}`);
    const id: string = req.params.id;
    const skeletonDto: ISkeletonDTO = req.body;
    try {
      let result = await this.service.update(id, skeletonDto);
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log(`SkeletonController: delete: ${req.params.id}`);
    const id: string = req.params.id;
    try {
      let result = await this.service.delete(id);
      res.status(201).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };
}
