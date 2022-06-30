import { container } from "tsyringe";

import IEntityController from "../../controllers/Entity/IEntityController"
import EntityController from "../../controllers/Entity/EntityController";

container.register<IEntityController>("EntityController", {
  useClass: EntityController
});
