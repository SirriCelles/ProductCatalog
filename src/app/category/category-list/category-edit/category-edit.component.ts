import { Subscription } from 'rxjs';
import { CategoryService, FormCategory } from './../../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Category } from '../../category.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit, OnDestroy {

  @ViewChild('formData', {static:true}) formData: NgForm

  categoryId: number;
  category: Category;
  catName: string = "";
  dataSaved = false;
  successMessage: string = '';
  putCatError = null;
  private formSubscription: Subscription;
  private putCatErrorSubcription: Subscription;

  putCategoryData: FormCategory; 

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryId = +this.route.snapshot.params['id'];
    this.formSubscription = this.categoryService.getCategoryById(this.categoryId)
    .subscribe((data: Category) =>
    {
      this.category = data;
      this.formData.setValue({
        categoryId: this.category.id,
        categoryName: this.category.name,
        description: this.category.description
      });            
           
    }, error => {
      console.log(error);
      
    });
    
    this.getPutError()    
  }

  onUpdate(updateVal){
    this.putCategoryData = {
      id: updateVal.categoryId,
      name: updateVal.categoryName,
      description: updateVal.description
    };  
  
    this.categoryService.updateCategory(this.putCategoryData);
    this.dataSaved = true; 
    this.successMessage = this.catName + " Category Successfully updated.";  
    
    setTimeout( () => {
      this.router.navigate(['category/category-list'])
    }, 3000);

  }

  private getPutError(){
    this.putCatErrorSubcription = this.categoryService.postErrSub.subscribe(error => {
      this.putCatError = error;
      this.dataSaved = false;
    });
  }

  onHandleError(){
    this.putCatError = null;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.formSubscription.unsubscribe();
    this.putCatErrorSubcription.unsubscribe();
    
  }

}
