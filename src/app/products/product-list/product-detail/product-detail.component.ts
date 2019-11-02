import { Product } from './../../product.model';
import { ProductService } from './../../product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: number;
  product: Product;
  newProducts : Product[];
  products: Product[] = [];
  getCatError = null;
  fetchingData = false;

  constructor( private route: ActivatedRoute, private productService: ProductService
              ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getProduct();
    });

    this.getProduct();
    this.getAllProducts();
  }

  //get product by id
  getProduct(){
    this.productService.getProductById(this.id).subscribe(res => {
        this.product = res;
        
    });
  }

  getAllProducts() {
    this.productService.getAllProducts()
    .subscribe( productList => {  //   
      for(let i=0; i <= productList.length; i++) {
        if(i < 5){
          this.products.push(productList[i]);
          this.fetchingData = true;          
        }
      }      
      this.fetchingData = true; 
    }, error => {
      
        this.getCatError = error;
        this.fetchingData = false;
        console.log(this.getCatError);
        
    });
  }

  onHandleError(){
    this.getCatError = null;
     
  }

}
