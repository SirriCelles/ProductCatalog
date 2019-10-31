import { Component, OnInit, ViewChild } from '@angular/core';
//import { HomeService } from './home.service';
//import { Image } from './image';
import { NgbSlideEvent, NgbSlideEventSource, NgbCarousel } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;

  @ViewChild('mycarousel', {static: true}) carousel: NgbCarousel;

  constructor (){}

  

  //function runs immediately application is loaded to display categories on the landing screen
  ngOnInit() {
  /*  this.homeservice.getImages().subscribe((imageData: Image[])=>{
      this.Images=imageData;
      this.Images=this.Images.slice(6)
    }, error =>{
      console.log(error);
    });*/

  }

  startCarousel(){
    this.carousel.cycle();
  }

  pauseCarousel(){
    this.carousel.pause();
  }

  moveNext(){
    this.carousel.next();
  }
  getPrev(){
    this.carousel.prev();
  }
  goToSlide(slide){
    this.carousel.select(slide);
  }

  onSlide(slideEvent: NgbSlideEvent){
    // console.log(slideEvent.source);
    // console.log(NgbSlideEventSource.ARROW_LEFT);
    // console.log(slideEvent.paused);
    // console.log(NgbSlideEventSource.INDICATOR);
    // console.log(NgbSlideEventSource.ARROW_RIGHT);
  }
  /*selected(x){
    this.downSelected(x);
    this.selectedIndex = x;
  }
  downSelected(i){
    this.transform = 100 - (i) * 50;
    this.selectedIndex = this.selectedIndex +1;
    if(this.selectedIndex > 4){
      this.selectedIndex = 0;
    }
  }*/
}
