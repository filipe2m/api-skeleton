import mongoose from "mongoose";
import { ISkeletonPersistence } from "../../dataschema/ISkeletonPersistence";

const SkeletonSchema = new mongoose.Schema (
  {
    head: { type: String, required: true, unique: true },
    body: { type: String, required: true },
    feet: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: 'Skeletons'
  }
);

export default mongoose.model<ISkeletonPersistence & mongoose.Document>("Skeleton", SkeletonSchema);