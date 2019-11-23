import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, OnChanges, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy, OnChanges {
  
  // @Output() routeChange: EventEmitter<string> = new EventEmitter<string>();

  routeSubscription: Subscription;
  routePath: string;
  searchName: string;
  messageBoxContent = TRANSLATE('Login');
  // param = {'value': this.searchName};

  
  constructor( private location: Location, private router: Router){  }

 
  ngOnInit() 
  {
    this.routeSubscription =this.router.events.subscribe(val => {

      if (this.location.path() == "/category/category-list") {
        this.routePath = this.location.path();
        this.searchName = "Categories";
        
      } 
      else if(this.location.path() == "/products-list") {
        this.routePath = this.location.path();
        this.searchName = "Products";
      }
      else{
        this.searchName = "search";
      }  
      //console.log(this.searchName);      
      // this.routeChange.emit(this.searchName);      
    });
    
  }

  ngOnChanges(){
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }

  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.routeSubscription.unsubscribe();
    
  }
    
}


export function TRANSLATE(str: string) {
  return str;
}
