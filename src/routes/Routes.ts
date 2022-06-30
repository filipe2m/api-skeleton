import {EntityRoute} from "./EntityRoute";

 class Routes {
    private _entity: EntityRoute;

    constructor() {
        this._entity = new EntityRoute();
    }
    
    get entity(): EntityRoute{
        return this._entity;
    }
}
export default Routes;