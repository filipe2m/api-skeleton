import {container} from "tsyringe";
import {EntityRoute} from "./EntityRoute";

 class Routes {
    private _entity: EntityRoute;

    constructor() {
        this._entity = container.resolve(EntityRoute);
    }
    
    get entity(): EntityRoute{
        return this._entity;
    }
}
export default Routes;