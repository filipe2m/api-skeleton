import { EntityController } from "./EntityController";
import { Request, Response, NextFunction } from 'express';

export default interface IEntityController {
    post: (req: Request, res: Response, next: NextFunction) => Promise<any>;
    get: (req: Request, res: Response, next: NextFunction) => Promise<any>;
    getById: (req: Request, res: Response, next: NextFunction) => Promise<any>;
    put: (req: Request, res: Response, next: NextFunction) => Promise<any>;
    patch: (req: Request, res: Response, next: NextFunction) => Promise<any>;
    delete: (req: Request, res: Response, next: NextFunction) => Promise<any>;
}

export const entityController = () => {
    return new EntityController();
}