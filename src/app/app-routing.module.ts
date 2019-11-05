import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { ProductDetailComponent } from './products/product-list/product-detail/product-detail.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryEditComponent } from './category/category-list/category-edit/category-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { MainLayoutComponent } from './layout/home-page/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { CategoryDetailComponent } from './category/category-list/category-detail/category-detail.component';
import { CategoryMainPageComponent } from './category/category-main-page/category-main-page.component';
import { ProductEditComponent } from './products/product-list/product-detail/product-edit/product-edit.component';

// Routes
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'category/category-list'},
  {
    
    path: 'category', 
    component: CategoryMainPageComponent, children: [

      {path: 'category-list', component: CategoryListComponent},
      {path: 'create-category', component: CategoryCreateComponent},
      {path: ':id', component: CategoryDetailComponent},
      {path:':id/:name', component: CategoryDetailComponent},
      {path: ':id/edit', component: CategoryEditComponent}     
    ]
    
  },
  {
    path: 'layout', 
    component: MainLayoutComponent
  },
  {
    path:'products-list', component:ProductListComponent
  },
  {
    path: 'log-in', component:LogInComponent
  },
  {
    path: 'sign-up', component:SignUpComponent
   
  },
  {
    path:'add-product', component:ProductCreateComponent
  },
  {path: 'edit-product/:id', component: ProductEditComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'not-found', component: ErrorHandlerComponent},
  {path: '**', redirectTo: '/not-found'}


];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
