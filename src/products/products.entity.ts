import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Brand } from "../brands/brands.entity";
import { Category } from "../categories/categories.entity";
import { Color } from "../colors/colors.entity";
import { Price } from '../prices/prices.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Brand)
  brand: Brand;

  @ManyToOne(() => Category)
  category: Category;

  @ManyToOne(() => Color)
  color: Color;

  @Column()
  images: string;

  @Column()
  model: string;

  @OneToMany(() => Price, (price: Price) => price.product, {
    cascade: true,
  })
  prices: Price[];

  @CreateDateColumn()
  createdAt: Date;
}
