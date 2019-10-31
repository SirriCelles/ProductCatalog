import { Router } from '@angular/router';
import { CategoryService } from './../category.service';
import { Category } from './../category.model';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit, OnDestroy {

  @ViewChild('formData', {static: true}) formData: NgForm;
  
  catName: string = "";
  dataSaved = false;
  catData: Category = {
    name: '',
    description: '',
    };
  
    successMessage: string = '';
    postCatError = null;
    private postCatErrorSubcription: Subscription;

  constructor(private categoryService: CategoryService,
               private router: Router) { }

  ngOnInit() {
    this.getPostError();
  }

  onSave() {
    this.catData.name = this.formData.form.value.categoryName;
    this.catData.description = this.formData.form.value.description;
    this.categoryService.createCategory(this.catData.name, this.catData.description);
    this.dataSaved = true; 
    this.successMessage = this.catName + " Category Successfully added."

    setTimeout( () => {
        this.formData.reset();
        this.router.navigateByUrl('/category/category-list');

    }, 4000);

  }

  onHandleError(){
    this.postCatError = null;
  }

  private getPostError(){
    this.postCatErrorSubcription = this.categoryService.postErrSub.subscribe(error => {
      this.postCatError = error;
      this.dataSaved = false;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.postCatErrorSubcription.unsubscribe();
    
  }

}
