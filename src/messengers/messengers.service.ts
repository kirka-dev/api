import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Messenger } from './messengers.entity';

@Injectable()
export class MessengersService {
  constructor(
    @InjectRepository(Messenger)
    private messengersRepository: Repository<Messenger>,
  ) {}

  async create(messenger: Messenger): Promise<Messenger> {
    return await this.messengersRepository.save(messenger);
  }

  async update(messenger: Messenger): Promise<UpdateResult> {
    return await this.messengersRepository.update(messenger.id, messenger);
  }

  async remove(id: number): Promise<void> {
    await this.messengersRepository.delete(id);
  }

  async findOne(id: number): Promise<Messenger> {
    return await this.messengersRepository.findOneBy({ id });
  }

  async findAll(): Promise<Messenger[]> {
    return await this.messengersRepository.find();
  }
}
