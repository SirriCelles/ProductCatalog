import { CategoryService } from './../../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  id: number;
  showInfo = false;
  showProgress = false;
  successMessage: string = '';
  removeWarning = false;
  delError = null;

  constructor(private route: ActivatedRoute,
            private categoryService: CategoryService,
            private router: Router) { }

  ngOnInit() {
  }

  onClickYes() {
    this.showInfo = true;
    this.showProgress = true;
    this.id = +this.route.snapshot.params['id'];
    this.categoryService.deleteCategory(this.id)
    .subscribe(response => {
      this.showInfo = false;
      this.showProgress = false;
      this.removeWarning = true;
      this.successMessage = " Category Successfully Deleted";
      // console.log(response);
      setTimeout(() => {
        this.router.navigateByUrl('/category/category-list');
      }, 2000);
      
    }, error => {
      this.delError = error;
      console.log(error);      
    });
    
    
    
    
  }

  onClickNo() {
    $(document).ready(function() {
        // Select tab by name
        $('.nav-tabs a[href="#category-detail"]').tab('show')
    });
  }

}
