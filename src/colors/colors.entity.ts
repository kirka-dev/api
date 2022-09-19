import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('colors')
export class Color {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  displayName: string;

  @Column()
  hex: string;
}
