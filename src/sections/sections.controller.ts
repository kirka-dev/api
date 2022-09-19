import { ApiTags } from "@nestjs/swagger";
import {
  Controller,
  Body,
  Post,
  Put,
  Delete,
  Get,
  Param,
} from '@nestjs/common';
import { SectionsService } from './sections.service';
import { Section } from './sections.entity';

@ApiTags("Sections")
@Controller('sections')
export class SectionsController {
  constructor(private sectionsService: SectionsService) {}

  @Post()
  create(@Body() section) {
    return this.sectionsService.create(section);
  }

  @Put()
  update(@Body() section) {
    return this.sectionsService.update(section);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.sectionsService.remove(id);
  }

  @Get()
  getAll() {
    return this.sectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Section> {
    return this.sectionsService.findOne(id);
  }
}
