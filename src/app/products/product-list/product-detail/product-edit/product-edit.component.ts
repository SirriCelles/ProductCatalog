import { ProductService, ProductForm } from './../../../product.service';
import { Product } from './../../../product.model';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { CategoryService } from './../../../../category/category.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/category/category.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @ViewChild('formdata', {static:true}) formdata: NgForm

  product: Product;
  productName: string = "";
  dataSaved = false;
  successMessage: string = '';
  Error = null;
  private formSubscription: Subscription;
  private ErrorSubcription: Subscription;

  

  id: number;
  categories: Category[];

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductService) { }

  ngOnInit() {
    //getting all categories
    this.categoryService.getAllCategory()
    .subscribe(data=>{
      this.categories = data;                 
    }, error => {
      console.log(error);
      
    });    
    
    this.getProductDetail();
    this.getError();    
  }

  getProductDetail(){
    //getting selected product
    this.id = +this.route.snapshot.params['id'];
    // console.log(this.id);

    //populating form with product data
    this.formSubscription = this.productService.getProductById(this.id)
    .subscribe((data: Product) =>
    {
      this.product = data;      
      this.formdata.setValue({
        name: this.product.name,
        quantity: this.product.quantity,
        price: this.product.price,
        categoryselected: this.product.category.id,
        url: this.product.imageUrl        
      });    
              
    }, error => {
      console.log(error);      
    });
    
  }

  onUpdateProduct(formVal){
    let formData: ProductForm = {
      category: {
        id: formVal.categoryselected
      },      
      name: formVal.name,
      quantity: formVal.quantity ,
      price: formVal.price,
      imageUrl: formVal.url,
    }    
    this.productService.updateProduct(this.id, formData);  
    this.dataSaved = true;
    this.successMessage = this.productName + " Successfully updated.";  
    
    setTimeout( () => {
      this.router.navigate(['/products-list'])
    }, 3000); 
    
    this.getError()
  }

  private getError(){
    this.ErrorSubcription = this.productService.putErrSub.subscribe(error => {
      this.Error = error;
      this.dataSaved = false;
    });
  }

  onHandleError(){
    this.Error = null;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.formSubscription.unsubscribe();
    this.ErrorSubcription.unsubscribe();
  }



}
