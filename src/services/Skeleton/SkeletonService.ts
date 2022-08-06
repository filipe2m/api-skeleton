import ISkeletonService from './ISkeletonService';
import { injectable, inject } from "tsyringe";
import ISkeletonRepository from '../../repository/Skeleton/ISkeletonRepository';
import ISkeletonDTO from '../../dto/ISkeletonDTO';
import { SkeletonMapper } from '../../mappers/SkeletonMapper';

@injectable()
export default class SkeletonService implements ISkeletonService {

  constructor(
    @inject("SkeletonRepositoryFactory")
    private repository: ISkeletonRepository
  ) { }
  
  create = async (skeletonDto: ISkeletonDTO): Promise<ISkeletonDTO> => {
    console.log(`SkeletonService: create: ${JSON.stringify(skeletonDto)}`);
    const skeletonDomain = SkeletonMapper.toDomain(skeletonDto);
    const result = await this.repository.create(skeletonDomain);
    return SkeletonMapper.toDTO(result);
  };

  async getAll(): Promise<Array<ISkeletonDTO>> {
    console.log(`SkeletonService: getAll`);
    const result = await this.repository.getAll();
    const resultInDTO = result.map((skeleton) => {
      return SkeletonMapper.toDTO(skeleton);
    });

    return resultInDTO;
  }

  async getById(id: string): Promise<ISkeletonDTO> {
    console.log(`SkeletonService: getById: ${id}`);
    const result = await this.repository.getById(id);
    return SkeletonMapper.toDTO(result);
  }

  async update(id: string, skeletonDto: ISkeletonDTO): Promise<ISkeletonDTO> {
    console.log(`SkeletonService: update: ${id} ${skeletonDto}`);
    try {
      const skeletonDomain = SkeletonMapper.toDomain(skeletonDto);
      const result = await this.repository.update(id, skeletonDomain);
      return SkeletonMapper.toDTO(result);
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string) {
    console.log(`SkeletonService: delete`);
    try {
      const result = await this.repository.delete(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
