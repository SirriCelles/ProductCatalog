import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoryService } from '../../category/category.service';
import { ProductService} from '../product.service';
import { Category} from '../../category/category.model';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  categories : Category[];
  productInfo: Product[];

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  //gets all categories on onit
  ngOnInit() {
    this.categoryService.getAllCategory()
    .subscribe((response) => {
      this.categories = response         
                 
    }, error => {
      console.log(error);
      
    });


  }

  //to get all categories
  getCategory(){
    this.categoryService.getAllCategory()
    .subscribe(response => {
      this.categories = response; 
      console.log(this.categories);
                 
    }, error => {
      console.log(error);
      
    });
  }

  //creates a reactive form to add products
   
 

  //function executed on click of the create button and sends product information
  createProduct(categoryID){
   this.productService.addProduct(this.productInfo)
   .subscribe(data=>{
     data = this.productInfo;
     console.log(data);
   })
  }

}
