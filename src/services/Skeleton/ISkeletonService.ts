import ISkeletonDTO from "../../dto/ISkeletonDTO";

export default interface ISkeletonService {
    create: (skeletonDto: ISkeletonDTO) => Promise<ISkeletonDTO>;
    getAll: () => Promise<Array<ISkeletonDTO>>;
    getById: (id: string) => Promise<ISkeletonDTO>;
    update: (id: string, skeleton: ISkeletonDTO) => Promise<ISkeletonDTO>;
    delete: (id: string) => Promise<boolean>;  
}