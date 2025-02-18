import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductEntity } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/category/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity]), TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
