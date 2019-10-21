import { Product } from './../../products/product.model';
import { Image } from './image.model';
import { CategoryService } from './../category.service';
import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category.model';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  @Input() catProducts: Product[];

 
  images: Image[] = [];
  categories: Category[] = [];

  singleImage: Image[] =[];
  getCatError = null;
  fetchingData = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit()
  {
    this.getCategory();
   this.displayImages();
   console.log(this.catProducts);
   
  }

  
  //to get all categories
  getCategory(){
    this.categoryService.getAllCategory().subscribe(response => {
      this.categories = response;
      this.fetchingData = true;            
    }, error => {
      
      this.getCatError = error;
      this.fetchingData = false;
      console.log(this.getCatError);
      
    });
  }

  onHandleError(){
    this.getCatError = null;
  }

  
  displayImages(){
    this.categoryService.getImages().subscribe( (data) => {
      this.images = data;
      
      
    });
  }

}

