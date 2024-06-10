import { Controller, Get, Query } from '@nestjs/common';
import { PriceShop0002Service } from './prices-shop-0002.service';

@Controller('prices-shop-0002')
export class PricesShop0002Controller {
  constructor(private readonly priceShop0002Service: PriceShop0002Service) {}
  @Get()
  getPricesShop0002() {
    return this.priceShop0002Service.getPricesShop0002();
  }

  @Get('filter')
  async getPricesByProductId(
    @Query('productId') product_id: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string
  ) {
    return this.priceShop0002Service.findPricesByProductIdAndDate(product_id, startDate, endDate);
  }

  @Get('products')
  async getProducts(@Query('categoryId') categoryId: string) {
    return this.priceShop0002Service.getProducts(categoryId);
  }
}
