import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Price } from '../prices/prices.entity';
import { Category } from "../categories/categories.entity";
import { Color } from "../colors/colors.entity";

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Category)
  category: Category;

  @ManyToOne(() => Color)
  color: Color;

  @Column()
  images: string[];

  @Column()
  model: string;

  @OneToMany(() => Price, (price: Price) => price.product, {
    cascade: true,
  })
  prices: Price[];

  @CreateDateColumn()
  createdAt: Date;
}
