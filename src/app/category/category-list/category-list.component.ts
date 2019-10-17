import { Image } from './image.model';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Category } from '../category.model';
declare var $: any;

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

 
  images: Image[] = [];
  categories: Category[] = [];

  singleImage: Image[] =[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit()
  {
    this.getCategory();

  //  this.displayImages();
  }

  
  //to get all categories
  getCategory(){
    this.categoryService.getAllCategory().subscribe(response => {
      this.categories = response;
      // console.log(this.categories);
            
    }, error => {
      console.log(error);
      
    });
  }

  // displayImages(){
  //   this.categoryService.getImages().subscribe( (data) => {
  //   });
  // }

}

