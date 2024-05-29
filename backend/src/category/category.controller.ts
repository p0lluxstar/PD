import { Controller, Get, Query } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getCategories() {
    return this.categoryService.getCategories();
  }

  @Get('filter')
  async getCategory(@Query('categoryId') category_id: string) {
    return this.categoryService.getCategory(category_id);
  }
}
