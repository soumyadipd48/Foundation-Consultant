import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import AOS from "aos";

@Component({
  selector: 'app-industry-details-new',
  templateUrl: './industry-details-new.component.html',
  styleUrls: ['./industry-details-new.component.css']
})
export class IndustryDetailsNewComponent implements OnInit {

  id : string = '';
  i : number = 0;
  subject_id : number = 0;
  subject : string = '';
  subject_details : string = '';
  subject_details_arr : string[] = [];
  sub_subjects : string[] = [];

  industries = [
    {
    id: 1,
    subject : 'Power',
    shortName : 'tp1',
    short_details : "We are doing a great consultancy service since 2007. Bla Bla Bla.",
    details: 'Companies we have worked with :',
    details_arr : ['1. West Bengal State Electricity Distribution Company','2. Jindal Steel and Power Limited','3. West Bengal State Electricity Transmission Company',
      '4. Dishergarh Power Supply Corporation Ltd., Salt Lake City, Kolkata', '5. Bharat Heavy Electricals Limited', '6. Power Grid Corporation of India Ltd., Gurgaon',
      '7. Sun Steel Industries Pvt Ltd.']
    },
    {
    id: 2,
    subject : 'Oil & Natural Gas',
    shortName : 'FT2',
    short_details : "We are doing a great consultancy service since 2007.",
    details: 'Companies we have worked with :',
    details_arr: ['1. Indian Oil Corporation Limited, Pipelines Division, Noida', '2. Indian Oil Corporation Limited, Noida',
     '3. Oil & Natural Gas Corporation Limited, Hyderabad', '4. Indian Oil Corporation Limited, Indian Oil Bhavan, Noida',
     '5. Bharat Petrolium Corporation Limited', '6. Indian Oil Corporation Limited, Indian Oil Bhavan, Noida']
    },
    {
      id: 3,
      subject : 'Mining & Minerals',
      shortName : 'SI1',
      short_details : "We are doing a great consultancy service since 2007.",
      details: 'Companies we have worked with :',
      details_arr: ['1. National Mineral Development Corporation Ltd. - Kumaraswamy Iron Ore Project',
       '2. National Mineral Development Corporation Ltd. - Kumaraswamy Mine',
       '3. National Mineral Development Corporation Ltd. - Donimalai Iron Ore Mine',
       '4. National Mineral Development Corporation Ltd. - Bailadila Iron Ore Mine',
       '5. Jindal Steel & Power Limited, Orissa',
       '6. Rajastan State Mines & Minerals Limited, Udaipur',
       '7. Steel Authority of India Ltd., Rourkella Steel Plant']
    },
    {
      id: 4,
      subject : 'Railways',
      shortName : 'LT1',
      short_details : "We are doing a great consultancy service since 2007.",
      details: 'Companies we have worked with :',
      details_arr: ['1. Rail Vikash Nigam Limited(RVNL)', '2. Indian Railways']
    },
    {
      id: 5,
      subject : 'Roads and Highways',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007.",
      details: 'Companies we have worked with :',
      details_arr: ['1. National Highway Division, Darjeeling', '2. National Highway Authority of India Ltd.',
        '3. Public Works (Roads) Directorate, Govt. of West Bengal']
    },
    {
      id: 6,
      subject : 'Construction & Infra',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007.",
      details: 'Companies we have worked with :',
      details_arr: ['1. L & T Construction Power Transmission and Distribution', '2. M/s Subham Construction',
       '3. Kolkata Metropolitan Development Authority', '4. Barrackpore Municipality B.T. Road, Kolkata']
    },
    {
      id: 7,
      subject : 'Telecom',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007.",
      details: 'Companies we have worked with :',
      details_arr: ['']
    },
    {
      id: 8,
      subject : 'Automobiles',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007.",
      details: 'Companies we have worked with :',
      details_arr: ['Tata Motors Limited, Jamshedpur - 831010']
    },
    {
      id: 9,
      subject : 'Conveyor & Ropeways',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007.",
      details: 'Companies we have worked with :',
      details_arr: ['1. Conveyor & Ropeway Services Pvt. Ltd.']
    },
    {
      id: 10,
      subject : 'Renewable Resources',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007.",
      details: 'Companies we have worked with :',
      details_arr: ['1. M/s. Lumino Industries Limited, Acropolis Business Tower', '2. Lumino Industries Limited, Merlin Acropolis',
        '3. Vikram Solar Pvt. Ltd.']
    },
    {
      id: 11,
      subject : 'Bridges',
      shortName : 'CT2',
      short_details : "We are doing a great consultancy service since 2007.",
      details: 'Companies we have worked with :',
      details_arr: ['1. Public Works Department Govt. of West Bengal', '2. Archtech Consultants Pvt. Ltd.', '3. Central Public Work Department']
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

  projects = [
    {
      id : 1,
      mapping_id : 2,
      project_name : 'Indian Oil'
    }
  ];

  constructor(private activatedRoute : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
      offset: 10,
    });
    if(window.innerWidth<=700)
    {
      AOS.init({
        duration: 1200,
        offset: -750,
      });
    }
    this.activatedRoute.params.subscribe((params) => {
      this.subject = params['id'];
      for(let industry of this.industries)
      {
        if(this.subject === industry.subject)
        {
          this.subject_details = industry.details;
          this.subject_details_arr = industry.details_arr!;
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
    console.log(this.id);
    this.router.navigate(['/industry-details', this.id]);
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
