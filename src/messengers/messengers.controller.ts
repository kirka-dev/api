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
import { MessengersService } from './messengers.service';
import { Messenger } from './messengers.entity';

@ApiTags("Messengers")
@Controller('messengers')
export class MessengersController {
  constructor(private messengersService: MessengersService) {}

  @Post()
  create(@Body() messenger) {
    return this.messengersService.create(messenger);
  }

  @Put()
  update(@Body() messenger) {
    return this.messengersService.update(messenger);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.messengersService.remove(id);
  }

  @Get()
  getAll() {
    return this.messengersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Messenger> {
    return this.messengersService.findOne(id);
  }
}
