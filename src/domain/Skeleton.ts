import ISkeletonDTO from "../dto/ISkeletonDTO";
import { ISkeletonPersistence } from "../dataschema/ISkeletonPersistence";

export class Skeleton {
    head: string;
    body: string;
    feet: string;

    private constructor(head: string, body: string, feet: string) {
        this.head = head;
        this.body = body;
        this.feet = feet;
    }

    public static create(skeletonDTO: ISkeletonDTO | ISkeletonPersistence ): Skeleton {
        if (
            skeletonDTO.head &&
            skeletonDTO.body &&
            skeletonDTO.feet
        ) {
          return new Skeleton(
            skeletonDTO.head,
            skeletonDTO.body,
            skeletonDTO.feet
          );
        } else {
          throw new Error("Skeleton fields can't be null");
        }
    }
}
