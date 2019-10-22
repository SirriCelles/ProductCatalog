import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[];
  constructor(private productService : ProductService) { }

  ngOnInit() {
    // function that provides ProductService to headComponent.html
    this.productService.getAllProducts()
    .subscribe( productList => {
      this.products = productList;
          console.log(this.products);
        });
  }

  // displays view product details message on hover over the thumbnail
  viewProductDetails($event){
    console.log("View Product details", $event);
  }

  
}
