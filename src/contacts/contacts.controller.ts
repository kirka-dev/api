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
import { ContactsService } from './contacts.service';
import { Contact } from './contacts.entity';

@ApiTags("Contacts")
@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Post()
  create(@Body() contact) {
    return this.contactsService.create(contact);
  }

  @Put()
  update(@Body() contact) {
    return this.contactsService.update(contact);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.contactsService.remove(id);
  }

  @Get()
  getAll() {
    return this.contactsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Contact> {
    return this.contactsService.findOne(id);
  }
}
