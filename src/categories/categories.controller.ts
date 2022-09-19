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
import { CategoriesService } from './categories.service';
import { Category } from './categories.entity';

@ApiTags("Categories")
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post()
  create(@Body() category) {
    return this.categoriesService.create(category);
  }

  @Put()
  update(@Body() category) {
    return this.categoriesService.update(category);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.categoriesService.remove(id);
  }

  @Get()
  getAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Category> {
    return this.categoriesService.findOne(id);
  }
}
