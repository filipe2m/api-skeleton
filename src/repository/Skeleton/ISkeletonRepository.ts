import { Skeleton } from "../../domain/Skeleton";
import ISkeletonDTO from "../../dto/ISkeletonDTO";

export default interface ISkeletonRepository {
  create: (skeleton: Skeleton) => Promise<Skeleton>;
  getAll: () => Promise<Array<Skeleton>>;
  // getById: () => Promise<any>;
  // update: () => Promise<any>;
  // delete: () => Promise<any>;
}