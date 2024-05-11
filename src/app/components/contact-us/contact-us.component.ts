import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  id : string = '';
  i : number = 0;
  subject_id : number = 0;
  subject : string = '';
  subject_details : string = '';
  sub_subjects : string[] = [];

  industries = [
    {
    id: 1,
    subject : 'Power',
    shortName : 'tp1',
    short_details : "We are doing a great consultancy service since 2007. Bla Bla Bla.",
    details: 'After the first industrial revolution, the world was restructured in line with the new order production activities. This new order of production activities has developed an existential dependence on energy resources throughout the world as an inevitable result of industrialization developing on the industrial axis. Petroleum and natural gas are the most determinant commodities at the beginning of the energy and raw material resources consumed today. Although investments in renewable energy are increasing exponentially in the energy sector, oil has maintained its top position as the primary energy source consumed for the last two decades.'
    },
    {
    id: 2,
    subject : 'Oil & Natural Gas',
    shortName : 'FT2',
    short_details : "We are doing a great consultancy service since 2007.",
    details: 'After the first industrial revolution, the world was restructured in line with the new order production activities. This new order of production activities has developed an existential dependence on energy resources throughout the world as an inevitable result of industrialization developing on the industrial axis. Petroleum and natural gas are the most determinant commodities at the beginning of the energy and raw material resources consumed today. Although investments in renewable energy are increasing exponentially in the energy sector, oil has maintained its top position as the primary energy source consumed for the last two decades.'
    },
    {
      id: 3,
      subject : 'Mining & Minerals',
      shortName : 'SI1',
      short_details : "We are doing a great consultancy service since 2007.",
      details: 'After the first industrial revolution, the world was restructured in line with the new order production activities. This new order of production activities has developed an existential dependence on energy resources throughout the world as an inevitable result of industrialization developing on the industrial axis. Petroleum and natural gas are the most determinant commodities at the beginning of the energy and raw material resources consumed today. Although investments in renewable energy are increasing exponentially in the energy sector, oil has maintained its top position as the primary energy source consumed for the last two decades.'
    },
    {
      id: 4,
      subject : 'Railways',
      shortName : 'LT1',
      short_details : "We are doing a great consultancy service since 2007.",
      details: 'After the first industrial revolution, the world was restructured in line with the new order production activities. This new order of production activities has developed an existential dependence on energy resources throughout the world as an inevitable result of industrialization developing on the industrial axis. Petroleum and natural gas are the most determinant commodities at the beginning of the energy and raw material resources consumed today. Although investments in renewable energy are increasing exponentially in the energy sector, oil has maintained its top position as the primary energy source consumed for the last two decades.'
    },
    {
      id: 5,
      subject : 'Roads and Highways',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007.",
      details: 'After the first industrial revolution, the world was restructured in line with the new order production activities. This new order of production activities has developed an existential dependence on energy resources throughout the world as an inevitable result of industrialization developing on the industrial axis. Petroleum and natural gas are the most determinant commodities at the beginning of the energy and raw material resources consumed today. Although investments in renewable energy are increasing exponentially in the energy sector, oil has maintained its top position as the primary energy source consumed for the last two decades.'
    },
    {
      id: 6,
      subject : 'Construction & Infra',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007.",
      details: 'After the first industrial revolution, the world was restructured in line with the new order production activities. This new order of production activities has developed an existential dependence on energy resources throughout the world as an inevitable result of industrialization developing on the industrial axis. Petroleum and natural gas are the most determinant commodities at the beginning of the energy and raw material resources consumed today. Although investments in renewable energy are increasing exponentially in the energy sector, oil has maintained its top position as the primary energy source consumed for the last two decades.'
    },
    {
      id: 7,
      subject : 'Telecom',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007.",
      details: 'After the first industrial revolution, the world was restructured in line with the new order production activities. This new order of production activities has developed an existential dependence on energy resources throughout the world as an inevitable result of industrialization developing on the industrial axis. Petroleum and natural gas are the most determinant commodities at the beginning of the energy and raw material resources consumed today. Although investments in renewable energy are increasing exponentially in the energy sector, oil has maintained its top position as the primary energy source consumed for the last two decades.'
    },
    {
      id: 8,
      subject : 'Automobiles',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007.",
      details: 'After the first industrial revolution, the world was restructured in line with the new order production activities. This new order of production activities has developed an existential dependence on energy resources throughout the world as an inevitable result of industrialization developing on the industrial axis. Petroleum and natural gas are the most determinant commodities at the beginning of the energy and raw material resources consumed today. Although investments in renewable energy are increasing exponentially in the energy sector, oil has maintained its top position as the primary energy source consumed for the last two decades.'
    },
    {
      id: 9,
      subject : 'Conveyor & Ropeways',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007.",
      details: 'After the first industrial revolution, the world was restructured in line with the new order production activities. This new order of production activities has developed an existential dependence on energy resources throughout the world as an inevitable result of industrialization developing on the industrial axis. Petroleum and natural gas are the most determinant commodities at the beginning of the energy and raw material resources consumed today. Although investments in renewable energy are increasing exponentially in the energy sector, oil has maintained its top position as the primary energy source consumed for the last two decades.'
    },
    {
      id: 10,
      subject : 'Renewable Resources',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007.",
      details: 'After the first industrial revolution, the world was restructured in line with the new order production activities. This new order of production activities has developed an existential dependence on energy resources throughout the world as an inevitable result of industrialization developing on the industrial axis. Petroleum and natural gas are the most determinant commodities at the beginning of the energy and raw material resources consumed today. Although investments in renewable energy are increasing exponentially in the energy sector, oil has maintained its top position as the primary energy source consumed for the last two decades.'
    },
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

  projects = [
    {
      id : 1,
      mapping_id : 2,
      project_name : 'Indian Oil'
    }
  ];

  constructor(private activatedRoute : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.subject = params['id'];
      for(let industry of this.industries)
      {
        if(this.subject === industry.subject)
        {
          this.subject_details = industry.details;
          this.subject_id = industry.id;
          for(let project of this.projects)
          {
            if(this.subject_id == project.mapping_id)
            {
              this.sub_subjects[this.i] = project.project_name;
              this.i++;
            }
          }
        }
      }
    })
    console.log("from new component " + this.subject);
    console.log("from new component " + this.subject_details);
    console.log("from new component array " + this.sub_subjects);
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

  goToPartNextPage(fragment:any){
    this.router.navigateByUrl('/home#'+fragment)
  }

  goToPartAboutPage(fragment:any){
    this.router.navigateByUrl('/aboutUs#'+fragment)
  }

  openMap(){
    window.open('http://www.google.com/maps/place/22.5069129,88.3421315');
  }

}
