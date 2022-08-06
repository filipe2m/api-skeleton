import { ISkeletonPersistence } from "../dataschema/ISkeletonPersistence";
import ISkeletonDTO from "../dto/ISkeletonDTO";
import { Skeleton } from "../domain/Skeleton";

export class SkeletonMapper {
  public static toDTO(skeleton: Skeleton): ISkeletonDTO {
    return {
      head: skeleton.head,
      body: skeleton.body,
      feet: skeleton.feet
    } as ISkeletonDTO;
  }

  public static toPersistence(skeleton: Skeleton): ISkeletonPersistence {
    return {
      head: skeleton.head,
      body: skeleton.body,
      feet: skeleton.feet,
    } as ISkeletonPersistence;
  }

  public static toDomain(skeleton: ISkeletonDTO | ISkeletonPersistence): Skeleton {
    return Skeleton.create(skeleton);
  }

}