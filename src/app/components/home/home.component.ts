import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AOS from "aos";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id : string = '';
  public isCollapsed = true;
  items_new: any;

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
      short_details : "We are doing a great consultancy service since 2007."
    },
    {
      id: 2,
      subject : 'Field Testing',
      shortName : 'PLT',
      short_details : "We are doing a great consultancy service since 2007."
    },
    {
      id: 3,
      subject : 'Soil Investigation',
      shortName : 'SI2',
      short_details : "We are doing a great consultancy service since 2007."
    },
    {
      id: 4,
      subject : 'Laboratory Testing',
      shortName : 'LT',
      short_details : "We are doing a great consultancy service since 2007."
    },
    {
      id: 5,
      subject : 'Drone Survey',
      shortName : 'GPS',
      short_details : "We are doing a great consultancy service since 2007."
    },
    {
      id: 6,
      subject : 'Consulting Services',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007."
    }
  ];

  images_hero_old = [
    // {
    //   imageSrc: 'Hero2',
    //   imageAlt: 'nature1',
    // },
    // {
    //   imageSrc: 'Hero3',
    //   imageAlt: 'nature2',
    // },
    // {
    //   imageSrc: 'Hero4',
    //   imageAlt: 'person1',
    // },
    // {
    //   imageSrc: 'Hero5',
    //   imageAlt: 'person2',
    // },
    {
      imageSrc: 'Hero_new1',
      imageAlt: 'person2',
    },
    {
      imageSrc: 'Hero_new2',
      imageAlt: 'person2',
    },
    {
      imageSrc: 'Hero_new6',
      imageAlt: 'person2',
    },
    {
      imageSrc: 'Hero_new4',
      imageAlt: 'person2',
    },
  ];

  images_hero_bottom = [
    {
      imageSrc: 'BHero1',
      imageAlt: 'nature1',
    },
    {
      imageSrc: 'BHero2',
      imageAlt: 'nature1',
    },
    {
      imageSrc: 'BHero3',
      imageAlt: 'nature2',
    },
    // {
    //   imageSrc: 'BHero4',
    //   imageAlt: 'person1',
    // },
    {
      imageSrc: 'BHero5',
      imageAlt: 'person2',
    },
    // {
    //   imageSrc: 'BHero6',
    //   imageAlt: 'nature1',
    // },
    {
      imageSrc: 'BHero7',
      imageAlt: 'nature2',
    },
    {
      imageSrc: 'BHero8',
      imageAlt: 'person1',
    }
  ];

  images_hero = [
    {
      imageSrc: 'Home1',
      imageAlt: 'nature1',
    },
    {
      imageSrc: 'Home2',
      imageAlt: 'nature2',
    },
    {
      imageSrc: 'Home3',
      imageAlt: 'person1',
    },
    {
      imageSrc: 'Home4',
      imageAlt: 'person2',
    },
    {
      imageSrc: 'Home5',
      imageAlt: 'nature1',
    },
    {
      imageSrc: 'Home6',
      imageAlt: 'nature2',
    },
    {
      imageSrc: 'Home7',
      imageAlt: 'person1',
    },
    {
      imageSrc: 'Home8',
      imageAlt: 'person2',
    }
  ];

  items = [
    {
      title: 'Item 1',
      description: 'This is item 1',
      image: 'https://via.placeholder.com/300x200.png?text=Item+1'
    },
    {
      title: 'Item 2',
      description: 'This is item 2',
      image: 'https://via.placeholder.com/300x200.png?text=Item+2'
    },
    {
      title: 'Item 3',
      description: 'This is item 3',
      image: 'https://via.placeholder.com/300x200.png?text=Item+3'
    },
    {
      title: 'Item 4',
      description: 'This is item 4',
      image: 'https://via.placeholder.com/300x200.png?text=Item+4'
    },
    {
      title: 'Item 5',
      description: 'This is item 5',
      image: 'https://via.placeholder.com/300x200.png?text=Item+5'
    }
  ];

  imgCollection: Array<object> = [
    {
      image: 'https://loremflickr.com/g/600/400/paris',
      thumbImage: 'https://loremflickr.com/g/1200/800/paris',
      alt: 'Image 1',
      title: 'Image 1'
    }, {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 2',
      alt: 'Image 2'
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
      title: 'Image 5',
      alt: 'Image 5'
    }
];
  buttonDisabled!: false;

  constructor(private router: Router) { }

  ngOnInit(): void {

    AOS.init({
      duration: 1200,
      offset: 100,
    });
    if(window.innerWidth<=400)
    {
      AOS.init({
        duration: 1200,
        offset: -250,
      });
    }
    if(window.innerWidth<=500)
    {
      AOS.init({
        duration: 1200,
        offset: -250,
      });
    }
    if(window.innerWidth<=600)
    {
      AOS.init({
        duration: 1200,
        offset: -250,
      });
    }

    // window.addEventListener('scroll', function() {
    //   navbarScroll();
    //  });
    //  function navbarScroll() {
    //    var y = window.scrollY;
    //    if (y > 10) {
    //      var header = document.getElementsByClassName('top_left_top')[0];
    //      var container_new = document.getElementsByClassName('container_new')[0];
    //      header?.classList.remove('top_left_top');
    //      header?.classList!.add('nav');
    //      container_new?.classList!.remove('highlightTextIn');
    //      container_new?.classList!.add('nav-links');
     
    //    } else if (y < 10) {
    //        var header = document.getElementsByClassName('nav')[0];
    //        var container_new = document.getElementsByClassName('container_new')[0];
    //        header?.classList.remove('nav');
    //        header?.classList.add('top_left_top');
    //        container_new?.classList.remove('nav-links');
    //        container_new?.classList.add('highlightTextIn');
    //    }
    //  }

    this.items_new = [
      {name: 'Action', url: 'app/aaa'},
      {name: 'Another Action', url: 'app/bbb'},
       {name: 'Something else here', url: 'app/ccc'}
      ];
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
    this.router.navigateByUrl('/home#'+fragment)
  }

  goToPartNextPage(fragment:any){
    this.router.navigateByUrl('/home#'+fragment)
  }

  goToPartAboutPage(fragment:any){
    this.router.navigateByUrl('/aboutUs#'+fragment)
  }

  redirectContactUs(){
    this.router.navigate(['/contactUs']);
  }

  openMap(){
    window.open('https://www.google.com/maps/place/22.5069129,88.3421315');
  }

  handleChange(checkbox : any){
      let element  =  document.getElementById("side-menu") as HTMLInputElement;
      if(element.checked){
        const test1 = document.getElementById('top-left');
        const test2 = document.getElementById('top-left-new');
        const test3 = document.getElementById('hero_section_button');
        console.log("bla : "+test1);
        console.log("bla : "+test2);
        test1?.classList.toggle('top-left-hidden');
        test2?.classList.toggle('top-left-new-hidden');
        test3?.classList.toggle('hero_section_button_hidden');
        console.log("bla : yes");
      }
      else{
      const test1New = document.getElementById('top-left');
      const test2New = document.getElementById('top-left-new');
      const test3New = document.getElementById('hero_section_button');
      console.log("bla else : "+test1New);
      console.log("bla else : "+test2New);
      console.log("bla else : "+test3New);
      test1New?.classList.remove('top-left-hidden');
      test1New?.classList.add('top-left');
      test2New?.classList.remove('top-left-new-hidden');
      test2New?.classList.add('top-left-new');
      test3New?.classList.remove('hero_section_button_hidden');
      test3New?.classList.add('hero_section_button');
      console.log("bla else : yes");
      }
  }

}
