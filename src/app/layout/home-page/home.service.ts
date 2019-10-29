import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from './image';
import { Observable } from 'rxjs';

const URL:string= "/assets/images/image-database.json";
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpclient: HttpClient) { }
  getImages(){ 
  return this.httpclient.get<Image[]>(URL,{responseType: "json"})

  }
}
