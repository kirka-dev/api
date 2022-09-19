import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from '../users/users.entity';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  displayName: string;

  @OneToMany(() => User, (user) => user.role, {
    cascade: true,
  })
  users: User[];
}
