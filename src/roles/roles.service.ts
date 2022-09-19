import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Role } from './roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  async create(role: Role): Promise<Role> {
    return await this.rolesRepository.save(role);
  }

  async update(role: Role): Promise<UpdateResult> {
    return await this.rolesRepository.update(role.id, role);
  }

  async remove(id: number): Promise<void> {
    await this.rolesRepository.delete(id);
  }

  async findOne(id: number): Promise<Role> {
    return await this.rolesRepository.findOneBy({ id });
  }

  async findAll(): Promise<Role[]> {
    return await this.rolesRepository.find();
  }
}
