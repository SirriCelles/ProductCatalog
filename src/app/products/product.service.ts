import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = "https://catalog-api-gg-c.herokuapp.com/api";
  putErrSub = new Subject<string>();

  product: Product;
  constructor(private http: HttpClient) { }

  // gets list of all products from the api
  getAllProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>("https://catalog-api-gg-c.herokuapp.com/api/products");
  }
  

  //To get specific resource
  getProductById(id: number) {       
    return this.http.get<Product>(`${this.apiURL}/products/${id}`);
  }

  updateProduct(id: number, product: ProductForm) {   
    return this.http.put(`${this.apiURL}/products/${id}/category/${product.category.id}`,product)
    .subscribe(response => {     
    }, error => {
      this.putErrSub.next(error);     
    });
  
  }
  
  // deleteCategory(id: number) {
  //   return this.http.delete(`${this.apiURL}/category/${id}`);
  // }
  

  //adds a product under a given category
  addProduct(productInfo: ProductForm, categoryID:number)
  {
    let catID = categoryID; 
    return this.http.post<Product>(`${this.apiURL}/products/category/${catID}`, productInfo)
    // .pipe(catchError(this.handleError('addProduct', productInfo)));
  }
  
  
  //deletes a product
  deleteProduct(productID:number){ 
    console.log(productID);
    
    return this.http.delete(`${this.apiURL}/products/${productID}`);
  }
}

export class ProductForm {
  category: {
    id: number;
  }
  name:string;
  quantity: number;
  price: number;
  imageUrl: string;
}




