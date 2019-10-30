import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { NgForm} from '@angular/forms';
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/category/category.model';
import { Product } from '../product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  @ViewChild('formData', {static: true}) formData: NgForm;
  categories: Category[];
  products: Product;
  // injects the product and category service to be used in class
  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit() {
    // loads all categories on initiaization of class
    this.categoryService.getAllCategory()
    .subscribe(data=>{
      this.categories = data;
      console.log(this.categories);
    })
  }

  //function executed on click of the create button and sends product information
  createProduct(formdata:NgForm){
    console.log(formdata);
    //assigns values gotten from form object to local variables
   this.productService.addProduct(formdata.value, formdata.value.categoryID)
   .subscribe(data=>{
    //  this.products.push(data);
   })
  }

}
