import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  
  // routerSub;
  // path = false;
  // constructor(private router: Router, private route: ActivatedRoute, private location: Location) {

  // }

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    // this.routerSub = this.router.events.subscribe(val => {
    //  if(this.location.path() == '/**'){
    //    this.path = true;
    //  }
    // }, error => {
    //   console.log(error);
      
    // });    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.routerSub.unsubscribe();
  }
}
  