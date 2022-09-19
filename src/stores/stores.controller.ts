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
import { StoresService } from './stores.service';
import { Store } from './stores.entity';

@ApiTags("Stores")
@Controller('stores')
export class StoresController {
  constructor(private storesService: StoresService) {}

  @Post()
  create(@Body() store) {
    return this.storesService.create(store);
  }

  @Put()
  update(@Body() store) {
    return this.storesService.update(store);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.storesService.remove(id);
  }

  @Get()
  getAll() {
    return this.storesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Store> {
    return this.storesService.findOne(id);
  }
}
