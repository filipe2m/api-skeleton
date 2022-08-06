import {container} from "tsyringe";
import {SkeletonRoute} from "./SkeletonRoute";

 class Routes {
    private _skeleton: SkeletonRoute;

    constructor() {
        this._skeleton = container.resolve(SkeletonRoute);
    }
    
    get skeleton(): SkeletonRoute{
        return this._skeleton;
    }
}
export default Routes;