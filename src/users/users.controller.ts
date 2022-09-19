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
import { UsersService } from './users.service';
import { User } from './users.entity';

@ApiTags("Users")
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() user) {
    return this.usersService.create(user);
  }

  @Put()
  update(@Body() user) {
    return this.usersService.update(user);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }

  @Get()
  getAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }
}
