import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async create(product: Product): Promise<Product> {
    return await this.productsRepository.save(product);
  }

  async update(product: Product): Promise<UpdateResult> {
    return await this.productsRepository.update(product.id, product);
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }

  async findOne(id: number): Promise<Product> {
    return await this.productsRepository.findOneBy({ id });
  }

  async findAll(): Promise<Product[]> {
    return await this.productsRepository.find({
      relations: ['prices'],
    });
  }
}
