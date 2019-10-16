import { ProductListComponent } from './products/product-list/product-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { MainLayoutComponent } from './layout/home-page/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './products/product-create/product-create.component';

// Routes
const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: 
    [
      {path: 'home', component: MainLayoutComponent}
    ]
  },
  {path: 'category', component: CategoryListComponent},
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
