import { Category } from './category.model';
import { Image } from './category-list/image.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  putErrSub = new Subject<string>();
  postErrSub = new Subject<string>();

  private apiURL = "https://catalog-api-gg-c.herokuapp.com/api";

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

  //To create a new resource
  createCategory(name: string, description: string) {
    const category: Category = {name: name, description: description}
    this.http.post(`${this.apiURL}/category`, category)
    .subscribe(response => {
      // console.log(response);
      
    }, error => {
      this.postErrSub.next(error);     
    });
    
  }

  //function gets all categories
  getAllCategory():Observable<Category[]>
  {
    return this.http.get<Category[]>("https://catalog-api-gg-c.herokuapp.com/api/category");
  }

  //To get specific resource
  getCategoryById(id: number) {    
      return this.http.get<Category>(`${this.apiURL}/category/${id}`);
  }


  updateCategory(category: FormCategory) {   
    
    return this.http.put(`${this.apiURL}/category/${category.id}`,category)
    .subscribe(response => {  
      console.log(response);
             
    }, error => {
      this.putErrSub.next(error);     
    });

  }

  deleteCategory(id: number) {
    return this.http.delete(`${this.apiURL}/category/${id}`);
  }
}

export class FormCategory {
  id: number;
  name: string;
  description: string;
}
