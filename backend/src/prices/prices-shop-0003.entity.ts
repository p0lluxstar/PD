import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ProductEntity } from 'src/product/product.entity';
import { ShopEntity } from 'src/shop/shop.entity';

@Entity({ name: 'prices-shop-0003' })
export class PricesShop0003 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  date: Date;

  @ManyToOne(() => ShopEntity, (shop) => shop.PricesShop0003)
  @JoinColumn({ name: 'shop_id' })
  shop_id: ShopEntity;

  @ManyToOne(() => ProductEntity, (product) => product.pricesShop0003)
  @JoinColumn({ name: 'product_id' })
  product_id: ProductEntity;

  @Column({ type: 'numeric' })
  price: number;
}
