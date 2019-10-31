import { Category } from './category.model';
import { Product } from './../products/product.model';
import { ProductService } from './../products/product.service';
import { CategoryService } from './category.service';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CatProductsService {

  constructor(private categoryService: CategoryService,
              private productService: ProductService) { }

  catProducts: Product[] = [];  
  category: Category;
  categoryId: number;
  products: Product[];
  catProductsLength: number;
  randomImage: Product;
  randomImageUrl: string;
  imageMessage = null;

  catProductSub = new Subscription();




  getCatProducts() {
     this.productService.getAllProducts()
    .subscribe( (productList: Product[]) => {
     return this.catProducts = productList;     
    });
  }
  
}

