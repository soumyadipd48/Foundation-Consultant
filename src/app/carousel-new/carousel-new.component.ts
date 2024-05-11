import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc : string;
  imageAlt : string;
}

@Component({
  selector: 'app-carousel-new',
  templateUrl: './carousel-new.component.html',
  styleUrls: ['./carousel-new.component.css']
})
export class CarouselNewComponent implements OnInit {

  @Input() images_hero : carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 4000; //default to 3 seconds

  selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  //changes slides in every 3 seconds
  autoSlideImages() : void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }


  //sets index of image on dot/indicator click
  selectImage(index: number) : void {
    this.selectedIndex = index;
  }

  onPrevClick():void {
    if(this.selectedIndex === 0)
    {
      this.selectedIndex = this.images_hero.length-1;
    } else{
      this.selectedIndex--;
    }
  }
  onNextClick():void {
    if(this.selectedIndex === this.images_hero.length - 1)
    {
      this.selectedIndex = 0;
    } else{
      this.selectedIndex++;
    }
  }
}
