import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {
  @Input('search') componentName: string;
  // param = {value: 'this.componentName'};
  messageBoxContent = TRANSLATE('Login');

   constructor(private route: ActivatedRoute, public translate: TranslateService)
  {  
    // console.log(translate.); 
    
    translate.addLangs(['English', 'French','German', 'Spanish', 'Chinese']);
    //this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('English');

    // Changes the lang currently used
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('English');      
 }

  
   ngOnChanges() {    
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
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

export function TRANSLATE(str: string) {
  return str;
}
