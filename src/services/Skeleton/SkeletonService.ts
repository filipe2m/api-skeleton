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
    let skeletonDomain = SkeletonMapper.toDomain(skeletonDto);
    let result = await this.repository.create(skeletonDomain);
    return SkeletonMapper.toDTO(result);
  };

  async getAll(): Promise<Array<ISkeletonDTO>> {
    console.log(`SkeletonService: getAll`);
    let result = await this.repository.getAll();
    const resultInDTO = result.map((skeleton) => {
      return SkeletonMapper.toDTO(skeleton);
    });

    return resultInDTO;
  }

  // async getById() {
  //   console.log(`SkeletonService: getById`);
  //   this.repository.getById();
  // }

  // async update() {
  //   console.log(`SkeletonService: update`);
  //   this.repository.update();
  // }

  // async delete() {
  //   console.log(`SkeletonService: delete`);
  //   this.repository.delete();
  // }
}
