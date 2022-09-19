import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Brand } from './brands.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private brandsRepository: Repository<Brand>,
  ) {}

  async create(brand: Brand): Promise<Brand> {
    return await this.brandsRepository.save(brand);
  }

  async update(brand: Brand): Promise<UpdateResult> {
    return await this.brandsRepository.update(brand.id, brand);
  }

  async remove(id: number): Promise<void> {
    await this.brandsRepository.delete(id);
  }

  async findOne(id: number): Promise<Brand> {
    return await this.brandsRepository.findOneBy({ id });
  }

  async findAll(): Promise<Brand[]> {
    return await this.brandsRepository.find();
  }
}
