import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/users.entity';
import { Messenger } from '../messengers/messengers.entity';

@Entity('contacts')
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;

  @ManyToOne(() => Messenger, (messenger) => messenger.contact)
  messenger: Messenger;
}
