import { CategoryService } from './../category.service';
import { Image } from './../category-list/image.model';
import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-category-main-page',
  templateUrl: './category-main-page.component.html',
  styleUrls: ['./category-main-page.component.css']
})
export class CategoryMainPageComponent implements OnInit {

  images: Image[] = [];
  categories: Category[] = [];

  singleImage: Image[] =[];

  constructor(private categoryService: CategoryService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit()
  {
    //JS code to activate carousel 
    $(document).ready(function(){
        //Activating carousel
        $("#category-carousel").carousel(
          {interval: 3000, pause: "hover", keyboard: true}
        ); 
    });

    this.getCategoryImages();
    this.onNavigate();



  }

  onNavigate() {
    return this.router.navigate(['category-list'], {relativeTo: this.route});
  }

    getCategoryImages(){
        //Get images for Carosel
        this.categoryService.getImages()
        .subscribe((imageData: Image[]) => {
          this.images = imageData;                
          
        }, error => {
          console.log(error);
          
        });
    }
  

}
