import { ProductService } from './../../../products/product.service';
import { Product } from './../../../products/product.model';
import { Category } from './../../category.model';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  catProducts: Product[] = [];
  
  category: Category;
  categoryId: number;
  products: Product[];
  catProductsLength: number;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private categoryService: CategoryService,
              private productService: ProductService) { }

  ngOnInit() {
    $(document).ready(function() {
      $(".tool-tip").tooltip();
    });
    // this.getRouteParams();
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

    this.productService.getAllProducts()
    .subscribe( productList => {
      this.products = productList;
      for (let product of this.products) {
        if (product.category.id === this.categoryId) {
          this.catProducts.push(product);
        }        
      }
      this.catProductsLength = this.catProducts.length;
    });


  }

  // onEditCategory() {

  //   this.router.navigate(['/category', this.category.id, 'edit']);
  // }

}
