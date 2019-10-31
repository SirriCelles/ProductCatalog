import { Router } from '@angular/router';
import { Product } from './../product.model';
import { ProductForm } from './../product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { NgForm} from '@angular/forms';
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/category/category.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // @ViewChild('formData', {static: true}) formData: NgForm;
  categories: Category[];
  products: Product;
  successMessage: string = "";
  Error = null;
  dataSaved = false;

  // injects the product and category service to be used in class
  constructor(private productService: ProductService, private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit() {
    // loads all categories on initiaization of class
    this.categoryService.getAllCategory()
    .subscribe(data=>{
      this.categories = data;
    });
  }


  //function executed on click of the create button and sends product information
  createProduct(formdata){
    let formData: ProductForm = {
      category: {
       id: formdata.categoryID,
      },
      name: formdata.name,
      quantity: formdata.quantity,
      price: formdata.price,
      imageUrl: formdata.imageUrl        
    }

    this.productService.addProduct(formData, formData.category.id)
   .subscribe(data=>{
    let newData = data;
    this.dataSaved = true;
    this.successMessage = formData.name + " Successfully added.";

    setTimeout( () => {
      this.router.navigate(['/products-list'])
    }, 3000); 

   }, error => {
      this.Error = error;
     console.log(error);
     
   });
  }

}
