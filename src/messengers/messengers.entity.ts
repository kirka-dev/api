import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Contact } from '../contacts/contacts.entity';

@Entity('messengers')
export class Messenger {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  displayName: string;

  @OneToMany(() => Contact, (contact) => contact.messenger, {
    cascade: true,
  })
  contact: Contact[];
}
