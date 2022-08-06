import ISkeletonDTO from "../../dto/ISkeletonDTO";

export default interface ISkeletonService {
    create: (skeletonDto: ISkeletonDTO) => Promise<ISkeletonDTO>;
    getAll: () => Promise<Array<ISkeletonDTO>>;
    // getById: () => Promise<any>;
    // update: () => Promise<any>;
    // delete: () => Promise<any>;  
}