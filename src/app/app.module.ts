import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductDetailComponent } from './products/product-list/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-list/product-detail/product-edit/product-edit.component';
import { ProductDeleteComponent } from './products/product-list/product-detail/product-delete/product-delete.component';
import { HeaderComponent } from './layout/header/header.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryDeleteComponent } from './category/category-list/category-delete/category-delete.component';
import { SearchComponent } from './layout/header/search/search.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { LogInComponent } from './authentication/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    HeaderComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    SearchComponent,
    SignUpComponent,
    LogInComponent,
    routingComponents
    
  ]
,
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
