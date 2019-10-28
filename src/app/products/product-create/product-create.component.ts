import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoryService } from '../../category/category.service';
import { ProductService} from '../product.service';
import { Category} from '../../category/category.model';
import { Product } from '../product.model';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

// model of a product created on user interface


export class ProductCreateComponent implements OnInit {

  categories : Category[]; 
  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  //gets all categories on onit
  ngOnInit() {
    this.categoryService.getAllCategory()
    .subscribe(data=>{
      this.categories = data;
    }, error => {
      console.log(error);
      
    });
  }

  //function executed on click of the create button and sends product information
  createProduct(formdata:NgForm){
    console.log(formdata);
    console.log(formdata.value.categoryID);
    //assigns values gotten from form object to local variables
   this.productService.addProduct(formdata.value, formdata.value.categoryID)
   .subscribe(data=>{
    //  data = formdata.value;
   })
  }

}
