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
import { BrandsService } from './brands.service';
import { Brand } from './brands.entity';

@ApiTags("Brands")
@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Post()
  create(@Body() brand) {
    return this.brandsService.create(brand);
  }

  @Put()
  update(@Body() brand) {
    return this.brandsService.update(brand);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.brandsService.remove(id);
  }

  @Get()
  getAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Brand> {
    return this.brandsService.findOne(id);
  }
}
