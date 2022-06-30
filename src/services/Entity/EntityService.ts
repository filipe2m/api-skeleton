import { autoInjectable } from "tsyringe";
//import { Entity } from '../../domain/Entity';
//import { EntityRepositoryFactory } from '../repository/EntityRepositoryFactory';
//import IEntityRepository from '../../repository/IEntityRepository';
import IEntityDTO from '../../dto/IEntityDTO';
//import { EntityMapper } from '../mappers/EntityMapper';

@autoInjectable()
export class EntityService {
  //private repository: IEntityRepository;

  constructor() {
    //this.repository = EntityRepositoryFactory.entityRepository();
  }

  async getAllEntities() {
    console.log(`EntityService: getAllUsers`);
  }

  async getEntityById(id: string | null) {
    console.log(`EntityService: getEntityById: ${id}`);
    
  }

  async createEntity(entityDTO: IEntityDTO | null) {
    console.log(`EntityService: createEntity ${JSON.stringify(entityDTO)}`);

  }

  async updateEntity(id: string | null, entityDTO: IEntityDTO | null) {
    console.log(`EntityService: updateEntity: ${id} ${JSON.stringify(entityDTO)}`);
    
  }

  async deleteEntity(id: string | null) {
    console.log(`EntityService: deleteEntity: ${id}`);
    
  }
}
