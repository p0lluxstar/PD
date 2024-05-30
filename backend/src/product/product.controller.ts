import { Controller, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get('filter')
  async getProduct(@Query('productId') product_id: string) {
    return this.productService.getProduct(product_id);
  }
}
