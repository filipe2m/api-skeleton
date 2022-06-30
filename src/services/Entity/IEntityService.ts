import { EntityService } from "./EntityService";
import IEntityDTO from "../../dto/IEntityDTO";

export default interface IEntityService {
    getAllEntities: () => Promise<any>;
    getEntityById: (id: string) => Promise<any>;
    createEntity: (userDto: IEntityDTO) => Promise<any>;
    updateEntity: (id: string, userDto: IEntityDTO) => Promise<any>;
    deleteEntity: (id: string) => Promise<any>;  
}

export const entityService = () => {
    return new EntityService();
}