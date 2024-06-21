import { Component, HostListener, ViewChild, ElementRef, OnInit, HostBinding } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  @HostBinding('style.--right.%') right: string = '';
  @HostBinding('style.--left.%') left: string = '';
  arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  members = [
    {
      id: 1,
      name : 'Mr. Samatosh Sengupta',
      designation : 'Founder Partner',
      YOE : '45 years+',
      degree : 'ME(Cal),MIRC,',
      degree2 : 'MIGS,MICI,MIBC'
    },
    {
      id: 2,
      name : 'Mr. Tathagata Sengupta',
      designation : 'Partner',
      YOE : '15 years+',
      degree : 'MIM, GLASGOW, UK.'
    },
    {
      id: 3,
      name : 'Mr. Siddhartha Sengupta',
      designation : 'Geological Expert',
      YOE : '35 years+',
      degree : 'Msc. Geology, PG Diploma Remote Sensing & GIS'
    },
    {
      id: 4,
      name : 'Mr. Hemanta Mukherjee',
      designation : 'Laboratory Technician',
      YOE : '41 years+',
      degree : 'B. Sc.'
    },
    {
      id: 5,
      name : 'Mr. Saroj Mohan Dey',
      designation : 'Surveyor',
      YOE : '35 years+',
      degree : 'ITI'
    },
    {
      id: 6,
      name : 'Mr. Gopal Pradhan',
      designation : 'Accounts & Finance Manager',
      YOE : '22 years+',
      degree : 'B. Com.'
    },
    {
      id: 7,
      name : 'Mr. Sourav Khamrui',
      designation : 'Field Engineer',
      YOE : '11 years+',
      degree : 'ITI'
    },
    {
      id: 8,
      name : 'Mrs. Sarbari Roy Chowdhuri',
      designation : 'Office Manager Administration',
      YOE : '12 years+',
      degree : 'Graduation'
    },
    {
      id: 9,
      name : 'Mrs. Suman Das',
      designation : 'Geotech Engineer',
      YOE : '4 years+',
      degree : 'M. Tech in Geotechnical Engineering'
    },
    {
      id: 10,
      name : 'Mrs. Aritra Biswas',
      designation : 'Assistant Engineer',
      YOE : '2 years+',
      degree : 'B. Tech in Civil Engineering'
    },
    {
      id: 11,
      name : 'Mrs. Jaydev Das',
      designation : 'Admin Assistant',
      YOE : '8 years+',
      degree : 'Higher Secondary'
    },
  ];

  totalCards: number = this.members.length;
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage!: number;
  totalPages!: number;
  overflowWidth!: string;
  cardWidth!: string;
  containerWidth!: number;
  id : string = '';
  @ViewChild("container", { static: true, read: ElementRef })
  container!: ElementRef;
  @HostListener("window:resize") windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
        this.populatePagePosition();
      }
    }
  }

  industries = [
    {
    id: 1,
    subject : 'Power',
    shortName : 'tp1',
    short_details : "We are doing a great consultancy service since 2007. Bla Bla Bla."
    },
    {
    id: 2,
    subject : 'Oil & Natural Gas',
    shortName : 'FT2',
    short_details : "We are doing a great consultancy service since 2007."
    },
    {
      id: 3,
      subject : 'Mining & Minerals',
      shortName : 'SI1',
      short_details : "We are doing a great consultancy service since 2007."
    },
    {
      id: 4,
      subject : 'Railways',
      shortName : 'LT1',
      short_details : "We are doing a great consultancy service since 2007."
    },
    {
      id: 5,
      subject : 'Roads and Highways',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007."
    },
    {
      id: 6,
      subject : 'Construction & Infra',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007."
    },
    {
      id: 7,
      subject : 'Telecom',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007."
    },
    {
      id: 8,
      subject : 'Automobiles',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007."
    },
    {
      id: 9,
      subject : 'Conveyor & Ropeways',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007."
    },
    {
      id: 10,
      subject : 'Renewable Resources',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007."
    },
    {
      id: 11,
      subject : 'Bridges',
      shortName : 'FT2',
      short_details : "We are doing a great consultancy service since 2007."
    }
  ];

  services = [
    {
    id: 1,
    subject : 'Topographical Survey',
    shortName : 'tp1',
    short_details : "We are doing a great consultancy service since 2007. Bla Bla Bla."
    },
    {
    id: 2,
    subject : 'Field Testing',
    shortName : 'FT2',
    short_details : "We are doing a great consultancy service since 2007."
    },
    {
      id: 3,
      subject : 'Soil Investigation',
      shortName : 'SI1',
      short_details : "We are doing a great consultancy service since 2007."
    },
    {
      id: 4,
      subject : 'Laboratory Testing',
      shortName : 'LT1',
      short_details : "We are doing a great consultancy service since 2007."
    },
    {
      id: 5,
      subject : 'Drone Survey',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007."
    },
    {
      id: 6,
      subject : 'Consulting Services',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007."
    }
  ];

  

  totalCards_new: number = this.members.length;

  constructor(private router: Router) { }

  ngOnInit() {
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
  }

  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    console.log("total pages : "+this.totalPages);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
      10}px)`;
    this.right = this.overflowWidth;
    console.log("this.right "+this.right);
    this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
      10}px) / ${this.cardsPerPage})`;
  }

  getCardsPerPage() {
    console.log("get cards per page :"+Math.floor(this.container.nativeElement.offsetWidth / 300));
    return Math.floor(this.container.nativeElement.offsetWidth / 300);
  }

  changePage(incrementor: number) {
    this.currentPage += incrementor;
    console.log("current page"+this.currentPage);
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
      (this.currentPage - 1)}px)`;
    this.left = this.pagePosition;
    console.log("this.left "+this.left);
  }

  navigate(subject: any) {
    this.id = subject;
    console.log(this.id)
    this.router.navigate(['/service-details', this.id]);
  }

  navigate_industry(subject: any) {
    this.id = subject;
    console.log(this.id)
    this.router.navigate(['/industry-details-new', this.id]);
  }

  goToPart(fragment:any){
    console.log("button service clicked");
    this.router.navigateByUrl('/aboutUs#'+fragment)
  }

  goToPartNextPage(fragment:any){
    this.router.navigateByUrl('/home#'+fragment)
  }

  openMap(){
    window.open('http://www.google.com/maps/place/22.5069129,88.3421315');
  }

}
