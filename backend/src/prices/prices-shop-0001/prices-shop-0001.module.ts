import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PricesShop0001Entity } from './prices-shop-0001.entity';
import { PricesShop0001Controller } from './prices-shop-0001.controller';
import { PricesShop0001Service } from './prices-shop-0001.service';
import { ProductEntity } from 'src/product/product.entity';
import { CategoryEntity } from 'src/category/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PricesShop0001Entity, ProductEntity, CategoryEntity])],
  controllers: [PricesShop0001Controller],
  providers: [PricesShop0001Service],
})
export class PricesShop0001Module {}
