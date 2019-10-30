import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: Product;
  constructor(private http: HttpClient) { }

  // gets list of all products from the api
  getAllProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>("https://product-api-gg-c.herokuapp.com/api/products");
  }
  //edits a product


  //adds a product under a given category
  addProduct(productInfo: Product, categoryID:number):Observable<Product>
  {
    let catID = categoryID;
    let prodInfo = {
      name: productInfo.name,
      quantity: productInfo.quantity,
      price: productInfo.price,
      imageUrl: productInfo.imageUrl
    }
    return this.http.post<Product>("https://catalog-api-gg-c.herokuapp.com/api/products/category/"+catID, 
    prodInfo)
    // .pipe(catchError(this.handleError('addProduct', productInfo)));
  }
  
  
  //deletes a product
  deleteProduct(productID:number){ 
    return this.http.delete("https://catalog-api-gg-c.herokuapp.com/api/products/"+productID);
  }
}
