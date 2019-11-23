import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { MainLayoutComponent } from './layout/home-page/main-layout.component';

import { FooterComponent } from './layout/footer/footer.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-list/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-list/product-detail/product-edit/product-edit.component';
import { ProductDeleteComponent } from './products/product-list/product-detail/product-delete/product-delete.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { HeaderComponent } from './layout/header/header.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryDetailComponent } from './category/category-list/category-detail/category-detail.component';
import { CategoryEditComponent } from './category/category-list/category-edit/category-edit.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryDeleteComponent } from './category/category-list/category-delete/category-delete.component';
import { SearchComponent } from './layout/header/search/search.component';
import { CategoryMainPageComponent } from './category/category-main-page/category-main-page.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    FooterComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProductCreateComponent,
    HeaderComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    CategoryEditComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    SearchComponent,
    CategoryMainPageComponent,
    SignUpComponent,
    LogInComponent,
    ErrorHandlerComponent,
    
  ]
,
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    TranslateModule.forRoot({
     loader: {
      provide: TranslateLoader,
      useFactory: HttpClientFactory,
      deps: [HttpClient]
     }
    })
    
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpClientFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}
