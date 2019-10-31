import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category} from './category';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private url : string = "/assets/images/images.json";

  constructor(private http: HttpClient) { }

  //function gets all categories
  getCategory():Observable<Category[]>
  {
    return this.http.get<Category[]>("https://product-api-gg-c.herokuapp.com/api/category");
  }
}
