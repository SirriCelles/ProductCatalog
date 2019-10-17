import { Component, OnInit } from '@angular/core';
import { Category } from '../../category.model';
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

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    $(document).ready(function() {
      $(".tool-tip").tooltip();
    });
    this.getRouteParams();
    
  }

  getRouteParams(){
    this.category = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    console.log(this.categoryId);
    
    // this.route.params.subscribe(
    //   (params: Params) => {
    //       this.category.id = params['id'];
    //       this.category.name = params['name'];
    //   })
  }

  onEditCategory() {

    this.router.navigate(['/category/id/edit']);
  }

}
