import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from 'src/product/product.entity';
import { Shop } from 'src/shop/shop.entity';

@Entity({ name: 'prices-shop-0003' })
export class PricesShop0003 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  date: Date;

  @ManyToOne(() => Shop, shop => shop.PricesShop0003)
  @JoinColumn({name: 'shop_id'})
  shop_id: Shop;

  @ManyToOne(() => Product, (product) => product.pricesShop0003)
  @JoinColumn({ name: 'product_id' })
  product_id: Product;

  @Column({ type: 'numeric' })
  price: number;
}
