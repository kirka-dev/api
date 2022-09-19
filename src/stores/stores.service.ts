import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Store } from './stores.entity';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private storesRepository: Repository<Store>,
  ) {}

  async create(store: Store): Promise<Store> {
    return await this.storesRepository.save(store);
  }

  async update(store: Store): Promise<UpdateResult> {
    return await this.storesRepository.update(store.id, store);
  }

  async remove(id: number): Promise<void> {
    await this.storesRepository.delete(id);
  }

  async findOne(id: number): Promise<Store> {
    return await this.storesRepository.findOneBy({ id });
  }

  async findAll(): Promise<Store[]> {
    return await this.storesRepository.find({ relations: ['prices'] });
  }
}
