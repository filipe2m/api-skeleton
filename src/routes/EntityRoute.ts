import { Router } from 'express';
import IEntityController, {entityController} from '../controllers/Entity/IEntityController';

export class EntityRoute {
    private controller: IEntityController;

    constructor() {
        this.controller = entityController();
    }

    routes(app: Router) {
        app.post('/api/entity', this.controller.post);
        app.get('/api/entities', this.controller.get);
        app.get('/api/entity/:id', this.controller.getById);
        app.put('/api/entity/:id', this.controller.put);
        app.patch('/api/entity/:id', this.controller.patch);
        app.delete('/api/entity/:id', this.controller.delete);
    }
}