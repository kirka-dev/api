import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }

  async update(user: User): Promise<UpdateResult> {
    return await this.usersRepository.update(user.id, user);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOneBy({ id });
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find({ relations: ['role'] });
  }
}
