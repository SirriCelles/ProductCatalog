import { Subscription } from 'rxjs';
import { ProductService } from './../../../products/product.service';
import { Product } from './../../../products/product.model';
import { Category } from './../../category.model';
import { CategoryService } from './../../category.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit, OnDestroy {

  catProducts: Product[] = [];  
  category: Category;
  categoryId: number;
  products: Product[];
  catProductsLength: number;
  randomImage: Product;
  randomImageUrl: string;
  imageMessage = null;

  getProductsSub: Subscription;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private categoryService: CategoryService,
              private productService: ProductService) { }

  ngOnInit() {
    $(document).ready(function() {
      $(".tool-tip").tooltip();
    });
    
    this.getRouteParams();
    this.getCategoryDetail();
            
  }

  getRouteParams(){
    this.categoryId = +this.route.snapshot.params['id']  
    this.route.params.subscribe(
      (params: Params) => {
          this.categoryId = +params['id'];          
      })
  }

  getCategoryDetail(){
    this.categoryService.getCategoryById(this.categoryId).subscribe((data: Category) =>
    {
      this.category = data;
            
    }, error => {
      console.log(error);      
    });
    this.getCatProducts();
  }


  getCatProducts() {
    this.getProductsSub = this.productService.getAllProducts()
    .subscribe( productList => {
      this.products = productList;
      for (let product of this.products) {
        if (product.category.id === this.categoryId) {
          this.catProducts.push(product);
        }        
      }
      this.catProductsLength = this.catProducts.length; 
      let max:number = this.catProducts.length;
      let min: number = 0
      const index = this.randomNum(min, max); 
      if(this.catProductsLength >= 2) {
        this.randomImage = this.catProducts[index];
        this.randomImageUrl = this.randomImage.imageUrl;
      }  
      else if(this.catProductsLength == 1){
        this.randomImage = this.catProducts[0];
        this.randomImageUrl = this.randomImage.imageUrl;
      }  
      else{
          this.randomImageUrl = "https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_1280.jpg";
          this.imageMessage = alert("There is no Image for this Category. See Default.");
      }
    });
  }



  randomNum(min:number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // onEditCategory() {

  //   this.router.navigate(['/category', this.category.id, 'edit']);
  // }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.getProductsSub.unsubscribe();
  }

}
