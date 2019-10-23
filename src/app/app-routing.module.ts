import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryEditComponent } from './category/category-list/category-edit/category-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { MainLayoutComponent } from './layout/home-page/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './products/product-create/product-create.component';
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
      
      {path: 'create-category', component: CategoryCreateComponent},
      {path: 'category-list', component: CategoryListComponent},
      {path:':id', component: CategoryDetailComponent},
      {path: ':id/edit', component: CategoryEditComponent}     
    ]
    
  },

  {
    path: 'home', 
    component: MainLayoutComponent
  },
  {
    path:'products-list', component:ProductListComponent
  },
  {
    path:'add-product', component:ProductCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 

// array of routing components
export const routingComponents = [
  CategoryDetailComponent,
  CategoryEditComponent,
  CategoryListComponent,
  ProductListComponent,
  ProductCreateComponent,
  CategoryMainPageComponent,
  MainLayoutComponent
];
