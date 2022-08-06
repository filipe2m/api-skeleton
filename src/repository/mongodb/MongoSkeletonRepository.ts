import { Skeleton } from "../../domain/Skeleton";
import ISkeletonRepository from "../Skeleton/ISkeletonRepository";
import { SkeletonMapper } from "../../mappers/SkeletonMapper";
import skeletonSchema from "../../persistence/schemas/skeletonSchema";
import { ISkeletonPersistence } from "../../dataschema/ISkeletonPersistence";

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

  async getById(id: string): Promise<Skeleton> {
    console.log(`MongoSkeletonRepository: getById: ${id}`);
    try{
      let result = await skeletonSchema.findOne({head: id});
      if(result === null) throw new Error("Could't find a Skeleton");
      return SkeletonMapper.toDomain(result);
    }catch(err){
      throw err;
    }
  }

  async update(id: string, skeleton: Skeleton): Promise<any> {
    console.log(`MongoSkeletonRepository: update: ${id} ${skeleton}`);
    try {
      const skeletonDataModel = SkeletonMapper.toPersistence(skeleton);
      const updateObj = {
        $set: {
          head: skeletonDataModel.head,
          body: skeletonDataModel.body,
          feet: skeletonDataModel.feet
        },
      };
      const updatedSkeleton = await skeletonSchema.findOneAndUpdate(
        { head: id },
        updateObj,
        { new: true }
      );
      return SkeletonMapper.toDomain(updatedSkeleton as ISkeletonPersistence);
    } catch (err) {
      throw err;
    }
  }

  async delete(id: string): Promise<boolean> {
    console.log(`MongoSkeletonRepository: delete: ${id}`);
    try {
      const result = await skeletonSchema.deleteOne({ head: id });
      return result.acknowledged;
    } catch (err) {
      throw err;
    }
  }
}