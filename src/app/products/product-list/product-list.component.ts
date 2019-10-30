import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
declare var $: any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products : Product[];
  id: number;
  showInfo = false;
  showProgress = false;
  successMessage: string = '';
  removeWarning = false;
  delError = null;

  constructor(private productService : ProductService,
              private router: Router) { }

  ngOnInit() {
    // function that provides ProductService to headComponent.html
    this.productService.getAllProducts()
    .subscribe( productList => {
      this.products = productList;
      });
  }

  // displays view product details message on hover over the thumbnail
  viewProductDetails($event){
    console.log("View Product details", $event);
  }

  onShowModal(id){
    this.id = id;
    
    
  }

  onClickYes() {
    this.showInfo = true;
    this.showProgress = true;
    console.log(this.id);    
    this.productService.deleteProduct(this.id)
    .subscribe(response => {
      this.showInfo = false;
      this.showProgress = false;
      this.removeWarning = true;
      this.successMessage = "Product Successfully Deleted";
      // console.log(response);
      setTimeout(() => {
        this.router.navigateByUrl('/products-list');
      }, 3000);
      
    }, error => {
      this.delError = error;
      console.log(error);      
    });
  }

  
}
