import { Category } from './../../category.model';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  
  category: Category;
  categoryId: number;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private categoryService: CategoryService) { }

  ngOnInit() {
    $(document).ready(function() {
      $(".tool-tip").tooltip();
    });
    this.getRouteParams();
    this.getCategoryDetail();
        
  }

  getRouteParams(){
    this.categoryId = +this.route.snapshot.params['id']
    // console.log(this.categoryId);
    
    // this.route.params.subscribe(
    //   (params: Params) => {
    //       this.category.id = params['id'];
    //       this.category.name = params['name'];
    //   })
  }

  getCategoryDetail(){
    this.categoryId =  +this.route.snapshot.params['id'];
    console.log(this.categoryId);   
    this.categoryService.getCategoryById(this.categoryId).subscribe((data: Category) =>
    {
      this.category = data;
      console.log(this.category.name);

      
    }, error => {
      console.log(error);
      
    })

  }

  onEditCategory() {

    this.router.navigate(['/category/id/edit']);
  }

}
