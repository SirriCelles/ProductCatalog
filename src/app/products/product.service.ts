import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { ImageToBlob } from '../utilities/imageToBlob';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productImgToBlob = new ImageToBlob();
  constructor(private http: HttpClient) { }

  // gets list of all products from the api
  getAllProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>("https://catalog-api-gg-c.herokuapp.com/api/products");
  }
  //edits a product

  //adds a product
  addProduct(productInfo: Product, catID: number){
    let ID ={ categoryID:catID}
    let prodInfo = {
      name: productInfo.name,
      price: productInfo.price,
      quantity: productInfo.quantity,
      imageUrl: productInfo.imageUrl

    }
      const Ourheader = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      });
  


    let postHeader={
      headers: Ourheader
    }
    console.log(prodInfo);
    return this.http.post("https://product-api-gg-c.herokuapp.com/api/products/category/"+ID.categoryID,
    prodInfo,postHeader);
  }
  
  //deletes a product
}
