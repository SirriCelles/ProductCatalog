import { Image } from './category-list/image.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Category} from './category.model';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiURL = "https://product-api-gg-c.herokuapp.com/api";

  private url : string = "/assets/images/images.json";

  // private imageURL: string = "/assets/images/image-database.json";

  public firstPage: string = "";
  public prevPage: string = "";
  public nextPage: string = "";
  public lastPage: string = "";

  constructor(private http: HttpClient) { }

//getting images from image-database.json
  getImages(){
    
    return this.http.get<Image[]>("/assets/images/image-database.json", {responseType: "json"})
     
  }

  



  //function gets all categories
  getAllCategory():Observable<Category[]>
  {
    return this.http.get<Category[]>("https://catalog-api-gg-c.herokuapp.com/api/category");
  }

  
//To get specific resource
  getCategoryById() {

  }

  //To create a new resource
  createCategory() {
    
  }

  editCategory() {

  }

  updateCategory() {

  }

  deleteCategory() {

  }
}
