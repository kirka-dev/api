import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from '../products/products.entity';
import { Store } from '../stores/stores.entity';

@Entity('prices')
export class Price {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: string;

  @ManyToOne(() => Product, (product) => product.prices)
  product: Product;

  @ManyToOne(() => Store, (store) => store.prices)
  store: Store;

  @UpdateDateColumn()
  updatedAt: Date;
}
