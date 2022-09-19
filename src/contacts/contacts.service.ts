import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Contact } from './contacts.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactsRepository: Repository<Contact>,
  ) {}

  async create(contact: Contact): Promise<Contact> {
    return await this.contactsRepository.save(contact);
  }

  async update(contact: Contact): Promise<UpdateResult> {
    return await this.contactsRepository.update(contact.id, contact);
  }

  async remove(id: number): Promise<void> {
    await this.contactsRepository.delete(id);
  }

  async findOne(id: number): Promise<Contact> {
    return await this.contactsRepository.findOneBy({ id });
  }

  async findAll(): Promise<Contact[]> {
    return await this.contactsRepository.find();
  }
}
