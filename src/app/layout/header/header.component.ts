import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../products/product.service';
import { Product} from '../../products/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public products : Product[];

  // inject service ProductService
  constructor(private productService: ProductService) { }

  ngOnInit() {
    
  }
  
  
    
}
