import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product} from '../product.model';

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

  // displays products gotten from the api response. this function is different from the other named similary in the service
  // getAllProducts(){
    // this.productService.getAllProducts()
    // .subscribe(productData =>{
      // this.product = productData;
      // console.log(this.product);
    // });
  // }
}
