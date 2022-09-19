import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Role } from '../roles/roles.entity';
import { Contact } from '../contacts/contacts.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @OneToMany(() => Contact, (contact) => contact.user, {
    cascade: true,
  })
  contacts: Contact[];

  @Column()
  name: string;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
