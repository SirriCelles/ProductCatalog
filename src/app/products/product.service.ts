import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // gets list of all products from the api
  getAllProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>("https://product-api-gg-c.herokuapp.com/api/products");
  }
  //edits a product

  //adds a product
  
  
  //deletes a product
}
