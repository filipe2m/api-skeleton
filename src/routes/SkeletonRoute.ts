import { Router } from 'express';
import { injectable, inject } from "tsyringe";
import ISkeletonController from '../controllers/Skeleton/ISkeletonController';

@injectable()
export class SkeletonRoute {
    
    constructor(
        @inject("SkeletonController")
        private controller: ISkeletonController
    ) {}

    routes(app: Router) {
        app.post('/api/skeleton', this.controller.create);
        app.get('/api/skeletons', this.controller.getAll);
        // app.get('/api/skeleton/:id', this.controller.getById);
        // app.put('/api/skeleton/:id', this.controller.update);
        // app.delete('/api/skeleton/:id', this.controller.delete);
    }
}