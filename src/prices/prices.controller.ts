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
import { PricesService } from './prices.service';
import { Price } from './prices.entity';

@ApiTags("Prices")
@Controller('prices')
export class PricesController {
  constructor(private pricesService: PricesService) {}

  @Post()
  create(@Body() price) {
    return this.pricesService.create(price);
  }

  @Put()
  update(@Body() price) {
    return this.pricesService.update(price);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pricesService.remove(id);
  }

  @Get()
  getAll() {
    return this.pricesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Price> {
    return this.pricesService.findOne(id);
  }
}
