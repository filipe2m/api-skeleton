import { MongoSkeletonRepository } from "../mongodb/MongoSkeletonRepository";
import { datasource } from "../../app";
import { injectable } from "tsyringe";

@injectable()
export default class SkeletonRepositoryFactory {
  constructor(){
    switch (datasource.repository) {
      case "mongo":
        return new MongoSkeletonRepository();
      default:
        return new MongoSkeletonRepository();
    }
  }
}