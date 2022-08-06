import { container } from "tsyringe";

import ISkeletonController from "../../controllers/Skeleton/ISkeletonController"
import SkeletonController from "../../controllers/Skeleton/SkeletonController";

import ISkeletonService from "../../services/Skeleton/ISkeletonService"
import SkeletonService from "../../services/Skeleton/SkeletonService";

import ISkeletonRepository from "../../repository/Skeleton/ISkeletonRepository";
import SkeletonRepositoryFactory from "../../repository/Skeleton/SkeletonRepositoryFactory";

container.register<ISkeletonController>("SkeletonController", {
  useClass: SkeletonController
});

container.register<ISkeletonService>("SkeletonService", {
  useClass: SkeletonService
});

container.register("SkeletonRepositoryFactory", {
  useClass: SkeletonRepositoryFactory
});