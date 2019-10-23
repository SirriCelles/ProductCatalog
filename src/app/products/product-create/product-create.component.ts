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

// interface of form to be submitted
export interface ProductInformation{
  name: string;
  categoryId: number;
  quantity: number;
  price: number;
}
export class ProductCreateComponent implements OnInit {

  categories : Category[];
  formdata: NgForm;
  productInfo: ProductInformation[];
 

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  //gets all categories on onit
  ngOnInit() {
    this.categoryService.getAllCategory()
    .subscribe(data=>{
      this.categories = data;
      console.log(this.categories);
    })
  }

  //creates a reactive form to add products
   
 

  //function executed on click of the create button and sends product information
  createProduct(formdata:NgForm){
   this.productService.addProduct(formdata.value)
   .subscribe(data=>{
     
   })
  }

}
