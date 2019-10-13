import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { MainLayoutComponent } from './layout/home-page/main-layout.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';


const routes: Routes = [
  {
    path: '', component:MainLayoutComponent,
  },
 
    {
      path:'products-list', component:ProductListComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
