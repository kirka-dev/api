import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Price } from '../prices/prices.entity';

@Entity('stores')
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  displayName: string;

  @Column()
  delivery: string;

  @Column()
  url: string;

  @OneToMany(() => Price, (price: Price) => price.store, {
    cascade: true,
  })
  prices: Price[];
}
