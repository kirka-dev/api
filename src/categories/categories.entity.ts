import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../roles/roles.entity';
import { Section } from '../sections/sections.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  displayName: string;

  @ManyToOne(() => Section, (section) => section.childs)
  parent: Role;
}
