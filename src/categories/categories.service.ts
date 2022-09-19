import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Category } from './categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async create(category: Category): Promise<Category> {
    return await this.categoriesRepository.save(category);
  }

  async update(category: Category): Promise<UpdateResult> {
    return await this.categoriesRepository.update(category.id, category);
  }

  async remove(id: number): Promise<void> {
    await this.categoriesRepository.delete(id);
  }

  async findOne(id: number): Promise<Category> {
    return await this.categoriesRepository.findOneBy({ id });
  }

  async findAll(): Promise<Category[]> {
    return await this.categoriesRepository.find();
  }
}
