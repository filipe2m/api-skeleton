import { Skeleton } from "../../domain/Skeleton";
import ISkeletonRepository from "../Skeleton/ISkeletonRepository";
import { SkeletonMapper } from "../../mappers/SkeletonMapper";
import skeletonSchema from "../../persistence/schemas/skeletonSchema";

export class MongoSkeletonRepository implements ISkeletonRepository {
  constructor() {}

  async create(skeleton: Skeleton): Promise<Skeleton> {
    console.log(`MongoSkeletonRepository: create: ${JSON.stringify(skeleton)}`);
    try {
      const skeletonDataModel = SkeletonMapper.toPersistence(skeleton);
      const createdUser = await skeletonSchema.create(skeletonDataModel);

      return SkeletonMapper.toDomain(createdUser);
    } catch (err) {
      throw err;
    }
  }

  async getAll(): Promise<Array<Skeleton>> {
    console.log(`MongoSkeletonRepository: getAll`);
    try{
      const arraySkeletons = await skeletonSchema.find();
      const result = arraySkeletons.map(skeleton => {
          return SkeletonMapper.toDomain(skeleton);
      });
      return result;
    }catch(err){
      throw err;
    } 
  }

  // async getById(): Promise<any> {
  //   console.log(`MongoSkeletonRepository: getById`);
  // }

  // async update(): Promise<any> {
  //   console.log(`MongoSkeletonRepository: update`);
  // }

  // async delete(): Promise<any> {
  //   console.log(`MongoSkeletonRepository: delete`);
  // }
}