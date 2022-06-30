import { Router } from 'express';
import { injectable, inject } from "tsyringe";
import IEntityController from '../controllers/Entity/IEntityController';

@injectable()
export class EntityRoute {
    
    constructor(
        @inject("EntityController")
        private controller: IEntityController
    ) {}

    routes(app: Router) {
        app.post('/api/entity', this.controller.post);
        app.get('/api/entities', this.controller.get);
        app.get('/api/entity/:id', this.controller.getById);
        app.put('/api/entity/:id', this.controller.put);
        app.patch('/api/entity/:id', this.controller.patch);
        app.delete('/api/entity/:id', this.controller.delete);
    }
}