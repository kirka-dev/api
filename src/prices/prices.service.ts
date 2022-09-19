import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Price } from './prices.entity';

@Injectable()
export class PricesService {
  constructor(
    @InjectRepository(Price)
    private pricesRepository: Repository<Price>,
  ) {}

  async create(price: Price): Promise<Price> {
    return await this.pricesRepository.save(price);
  }

  async update(price: Price): Promise<UpdateResult> {
    return await this.pricesRepository.update(price.id, price);
  }

  async remove(id: number): Promise<void> {
    await this.pricesRepository.delete(id);
  }

  async findOne(id: number): Promise<Price> {
    return await this.pricesRepository.findOneBy({ id });
  }

  async findAll(): Promise<Price[]> {
    return await this.pricesRepository.find();
  }
}
