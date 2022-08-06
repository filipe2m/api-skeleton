import { Skeleton } from "../../domain/Skeleton";

export default interface ISkeletonRepository {
  create: (skeleton: Skeleton) => Promise<Skeleton>;
  getAll: () => Promise<Array<Skeleton>>;
  getById: (id: string) => Promise<Skeleton>;
  update: (id: string, skeleton: Skeleton) => Promise<Skeleton>;
  delete: (id: string) => Promise<boolean>;
}