import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Color } from './colors.entity';

@Injectable()
export class ColorsService {
  constructor(
    @InjectRepository(Color)
    private colorsRepository: Repository<Color>,
  ) {}

  async create(color: Color): Promise<Color> {
    return await this.colorsRepository.save(color);
  }

  async update(color: Color): Promise<UpdateResult> {
    return await this.colorsRepository.update(color.id, color);
  }

  async remove(id: number): Promise<void> {
    await this.colorsRepository.delete(id);
  }

  async findOne(id: number): Promise<Color> {
    return await this.colorsRepository.findOneBy({ id });
  }

  async findAll(): Promise<Color[]> {
    return await this.colorsRepository.find();
  }
}
