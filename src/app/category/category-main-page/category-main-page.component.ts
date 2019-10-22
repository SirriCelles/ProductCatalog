import { ProductService } from './../../products/product.service';
import { Subscription } from 'rxjs';
import { Product } from './../../products/product.model';
import { CategoryService } from './../category.service';
import { Image } from './../category-list/image.model';
import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-category-main-page',
  templateUrl: './category-main-page.component.html',
  styleUrls: ['./category-main-page.component.css']
})
export class CategoryMainPageComponent implements OnInit {

  
  catProducts: Product[];  
  // images: Image[] = [];
  categories: Category[] = [];

  products: Subscription;

  constructor(private categoryService: CategoryService, 
              private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService
              ) { }

  ngOnInit()
  {
    //JS code to activate carousel 
    $(document).ready(function(){
        //Activating carousel
        $("#category-carousel").carousel(
          {interval: 2000, pause: "hover", keyboard: true}
        );         
    });

    this.productService.getAllProducts()
   .subscribe( productList => {
    this.catProducts = productList;
    }); 
    
    // this.getCategoryImages();
    this.onNavigate();



  }

  onNavigate() {
    return this.router.navigate(['category-list'], {relativeTo: this.route});
  }

    // getCategoryImages(){
    //     //Get images for Carosel
    //     this.categoryService.getImages()
    //     .subscribe((imageData: Image[]) => {
    //       this.images = imageData;                
          
    //     }, error => {
    //       console.log(error);
          
    //     });
    // }

    onCreateCategory() {
      return this.router.navigate(['create-category'], {relativeTo: this.route});
    }
  

}
