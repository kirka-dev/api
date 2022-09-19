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
import { ColorsService } from './colors.service';
import { Color } from './colors.entity';

@ApiTags("Colors")
@Controller('colors')
export class ColorsController {
  constructor(private colorsService: ColorsService) {}

  @Post()
  create(@Body() color) {
    return this.colorsService.create(color);
  }

  @Put()
  update(@Body() color) {
    return this.colorsService.update(color);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.colorsService.remove(id);
  }

  @Get()
  getAll() {
    return this.colorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Color> {
    return this.colorsService.findOne(id);
  }
}
