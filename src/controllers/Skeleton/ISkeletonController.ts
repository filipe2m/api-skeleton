import ISkeletonDTO from '../../dto/ISkeletonDTO';
import { Request, Response, NextFunction } from 'express';

export default interface ISkeletonController {
    create: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAll: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    // getById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    // update: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    // delete: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}