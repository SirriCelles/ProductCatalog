import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {
  @Input('search') componentName: string;
  

  constructor(private route: ActivatedRoute) {
    
   }

  
   ngOnChanges() {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.log(this.componentName);
    
  }

  ngOnInit() { 
    // console.log(this.componentName);

  }

  

  // getSequence(num:number){
  //   let n:number = 0 ;
  //   let i:number;
  //   let fib:number[] = [];
  //   fib.push(n);
  //   fib.push(n+1);
  //   fib.push(fib[0] + fib[1]);
  //   for(i=2; i<=num; i++) {
  //     fib.push(fib[i] + fib[i-1]);
  //   }
  // }

  
}
