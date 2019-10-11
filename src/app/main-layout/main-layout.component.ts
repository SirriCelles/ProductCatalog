import { Component, OnInit } from '@angular/core';
import { ProductCategoryService} from '../product-category.service';
import { Category} from '../category';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  public categories : Category[];

  //injects productcategoryService class from my product-category.service.ts file
  constructor( private categoryService: ProductCategoryService) { }

  //function runs immediately application is loaded to display categories on the landing screen
  ngOnInit() {
    this.categoryService.getCategory()
      .subscribe( data => {
        this.categories = data;
        console.log(this.categories);
      });
  }

}
