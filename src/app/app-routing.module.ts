import { CategoryEditComponent } from './category/category-list/category-edit/category-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { MainLayoutComponent } from './layout/home-page/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryDetailComponent } from './category/category-list/category-detail/category-detail.component';
import { CategoryMainPageComponent } from './category/category-main-page/category-main-page.component';

// Routes
const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full', 
    redirectTo:'home'
  },
  {
    path: 'category', 
    component: CategoryMainPageComponent, children: [

      {path: 'category-list', component: CategoryListComponent},
      {path:':id/:name', component: CategoryDetailComponent},
      {path: ':id/edit', component: CategoryEditComponent}     
    ]
    
  },

  {
    path: 'home', 
    component: MainLayoutComponent
  },
  {
    path: 'products', 
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
