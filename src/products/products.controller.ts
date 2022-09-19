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
import { ProductsService } from './products.service';
import { Product } from './products.entity';

@ApiTags("Products")
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  create(@Body() product) {
    return this.productsService.create(product);
  }

  @Put()
  update(@Body() product) {
    return this.productsService.update(product);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productsService.remove(id);
  }

  @Get()
  getAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Product> {
    return this.productsService.findOne(id);
  }
}
