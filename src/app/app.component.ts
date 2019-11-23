import { TranslateService } from '@ngx-translate/core';
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

  constructor(private translate: TranslateService)
  {  
    // console.log(translate.);
    
    translate.addLangs(['en-English', 'fr-French','de-German', 'es-Spanish', 'zh-Chinese']);
    //this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en-English');

    // Changes the lang currently used
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('en-English');      
 }

  ngOnInit(){
    
  }

  ngOnDestroy(): void {
    
  }
}
  