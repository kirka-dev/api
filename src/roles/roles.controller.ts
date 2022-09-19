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
import { RolesService } from './roles.service';
import { Role } from './roles.entity';

@ApiTags("Roles")
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post()
  create(@Body() role) {
    return this.rolesService.create(role);
  }

  @Put()
  update(@Body() role) {
    return this.rolesService.update(role);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.rolesService.remove(id);
  }

  @Get()
  getAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Role> {
    return this.rolesService.findOne(id);
  }
}
