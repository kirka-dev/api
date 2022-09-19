import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Section } from './sections.entity';

@Injectable()
export class SectionsService {
  constructor(
    @InjectRepository(Section)
    private sectionsRepository: Repository<Section>,
  ) {}

  async create(section: Section): Promise<Section> {
    return await this.sectionsRepository.save(section);
  }

  async update(section: Section): Promise<UpdateResult> {
    return await this.sectionsRepository.update(section.id, section);
  }

  async remove(id: number): Promise<void> {
    await this.sectionsRepository.delete(id);
  }

  async findOne(id: number): Promise<Section> {
    return await this.sectionsRepository.findOneBy({ id });
  }

  async findAll(): Promise<Section[]> {
    return await this.sectionsRepository.find();
  }
}
