import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import AOS from "aos";

@Component({
  selector: 'app-service-details-new',
  templateUrl: './service-details-new.component.html',
  styleUrls: ['./service-details-new.component.css']
})
export class ServiceDetailsNewComponent implements OnInit {

  subject : string = '';

  id : string = '';

  subject_id : number = 0;

  i : number = 0;

  subject_details : string = '';

  sub_subjects : string[] = [];


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
      details: "Topographic surveys are conducted to accurately map and represent the physical features and characteristics of a land surface. These surveys involve measuring and recording data points such as elevation, slope, and terrain contours. The collected information is used to create topographic maps that depict the natural and man-made features of an area, including hills, valleys, bodies of water, roads, buildings, and vegetation. Topographic surveys are essential for a wide range of applications, including urban planning, engineering design, land development, environmental assessments, and infrastructure projects."
    },
    {
      id: 2,
      subject : 'Field Testing',
      details: "Field testing refers to the process of conducting tests and measurements directly on-site to assess the properties and behavior of various materials and systems. It involves performing tests in real-world conditions to obtain accurate and relevant data. Field testing is commonly carried out in construction, engineering, and scientific research to evaluate the performance of structures, equipment, soils, or environmental factors. It allows for the verification of design assumptions, identification of potential issues, and validation of theoretical models, ensuring that projects and systems meet the required standards and specifications."
    },
    {
      id: 3,
      subject : 'Soil Investigation',
      details: "Soil investigation is a crucial process in geotechnical engineering that involves assessing the properties and characteristics of soil at a project site. It includes various techniques such as drilling, sampling, and laboratory testing to gather information about soil composition, density, moisture content, shear strength, and permeability. Soil investigations are conducted to determine the suitability of soil for construction projects, such as foundations, retaining walls, and pavements, and to assess potential geotechnical hazards such as soil liquefaction or slope instability. The data collected from soil investigations helps engineers make informed decisions regarding soil treatment, design appropriate foundation systems, and ensure the safety and stability of structures."
    },
    {
      id: 4,
      subject : 'Laboratory Testing',
      details: "Laboratory testing of soil/rock involves conducting various experiments and analyses to evaluate the physical, chemical, and mechanical properties of soil samples. It includes tests such as sieve analysis, moisture content determination, Atterberg limits, compaction tests, and shear strength tests. These tests provide valuable information about soil behavior, compaction characteristics, permeability, and load-bearing capacity. Laboratory testing of soil is essential in geotechnical engineering for designing foundations, assessing slope stability, evaluating soil suitability for construction, and ensuring the safety and durability of infrastructure projects."
    },
    {
      id: 5,
      subject : 'Drone Survey',
      details: "Geophysical surveys involve the use of various non-invasive methods to gather information about subsurface geology and environmental conditions. These surveys utilize physical properties of the earth, such as electrical conductivity, magnetic susceptibility, and seismic wave propagation, to create a detailed picture of the subsurface. By analyzing the collected data, geophysicists can map underground structures, identify mineral deposits, detect groundwater resources, locate buried utilities, and assess geological hazards. Geophysical surveys play a vital role in fields such as mineral exploration, environmental assessments, civil engineering, and archaeological investigations, providing valuable insights into the subsurface without the need for extensive excavation."
    },
    {
      id: 6,
      subject : 'Consulting Services',
      details: "Consulting services provide specialized expertise and guidance to clients in various sectors related to soil and rock mechanics. These services encompass a wide range of areas, including site investigations, foundation design, slope stability assessments, soil testing, and geotechnical analysis. We help clients assess and mitigate risks associated with soil and rock behavior, provide recommendations for foundation systems, support infrastructure projects with geotechnical expertise, and ensure compliance with relevant regulations and standards. By leveraging their knowledge and experience, consulting services assist clients in making informed decisions and ensuring the safe and reliable construction of projects."
    },
  ];

  sub_services = [
    {
      id : 1,
      mapping_id : 1,
      service_name : 'Topographic and Contour Survey'
    },
    {
      id : 2,
      mapping_id : 1,
      service_name : 'DGPS Survey'
    },
    {
      id : 3,
      mapping_id : 1,
      service_name : 'City Survey'
    },
    {
      id : 4,
      mapping_id : 1,
      service_name : 'Route Survey'
    },
    {
      id : 4,
      mapping_id : 1,
      service_name : 'Industrial Survey'
    },
    {
      id : 5,
      mapping_id : 1,
      service_name : 'Various Irrigation Projects'
    },
    {
      id : 6,
      mapping_id : 2,
      service_name : 'Standard Penetration test(SPT)'
    },
    {
      id : 7,
      mapping_id : 2,
      service_name : 'Static Cone Penetration test(SCPT)'
    },
    {
      id : 8,
      mapping_id : 2,
      service_name : 'Dynamic Cone Penetration test(DCPT)'
    },
    {
      id : 9,
      mapping_id : 2,
      service_name : 'Plate Load Test(Static & Cyclic, K-Value)'
    },
    {
      id : 10,
      mapping_id : 2,
      service_name : 'Field CBR Test'
    },
    {
      id :11,
      mapping_id : 2,
      service_name : 'Compaction Test'
    },
    {
      id : 12,
      mapping_id : 2,
      service_name : 'Field Permeability Test'
    },
    {
      id : 13,
      mapping_id : 2,
      service_name : 'Electrical Resistivity Test(In-situ)'
    },
    {
      id : 14,
      mapping_id : 2,
      service_name : 'Seismic Refraction Test'
    },
    {
      id : 15,
      mapping_id : 3,
      service_name : 'Drilling in Soil and Rock a) Auger Drilling b) Rotary Drilling'
    },
    {
      id : 16,
      mapping_id : 3,
      service_name : 'Excavation of Test Pits'
    },
    {
      id : 17,
      mapping_id : 3,
      service_name : 'Plate Load Test'
    },
    {
      id : 18,
      mapping_id : 3,
      service_name : 'In-Situ Penetration Test'
    },
    {
      id : 19,
      mapping_id : 3,
      service_name : 'Field CBR Test'
    },
    {
      id : 20,
      mapping_id : 3,
      service_name : 'In-Situ Permeability test'
    },
    {
      id : 21,
      mapping_id : 3,
      service_name : 'Percolation Test'
    },
    {
      id : 22,
      mapping_id : 4,
      service_name : 'Specific gravity'
    },
    {
      id : 23,
      mapping_id : 4,
      service_name : 'Bulk & Dry Density'
    },
    {
      id : 24,
      mapping_id : 4,
      service_name : 'Natural Moisture Content'
    },
    {
      id : 25,
      mapping_id : 4,
      service_name : 'Grain size distribution(Sieve & Hydrometer)'
    },
    {
      id : 26,
      mapping_id : 4,
      service_name : 'Atterberg Limits(LL, PL & PI)'
    },
    {
      id : 27,
      mapping_id : 4,
      service_name : 'Shrinkage Limit'
    },
    {
      id : 28,
      mapping_id : 4,
      service_name : 'Free Swell Index'
    },
    {
      id : 29,
      mapping_id : 4,
      service_name : 'Direct Shear Test'
    },
    {
      id : 30,
      mapping_id : 4,
      service_name : 'Consolidation Test'
    },
    {
      id : 31,
      mapping_id : 4,
      service_name : 'Triaxial Shear Test'
    },
    {
      id : 32,
      mapping_id : 4,
      service_name : 'Unconfined Compression Test'
    },
    {
      id : 33,
      mapping_id : 4,
      service_name : 'Permeability Test'
    },
    {
      id : 34,
      mapping_id : 4,
      service_name : 'California Bearing Ratio(CBR)'
    },
    {
      id : 35,
      mapping_id : 4,
      service_name : 'Proctor Density Test(Standard & Modified) MDD & OMC'
    },
    {
      id : 36,
      mapping_id : 6,
      service_name : 'Introduction'
    },
    {
      id : 37,
      mapping_id : 6,
      service_name : 'Scope of work'
    },
    {
      id : 38,
      mapping_id : 6,
      service_name : 'Methodology'
    },
    {
      id : 39,
      mapping_id : 6,
      service_name : 'Local geology'
    },
    {
      id : 40,
      mapping_id : 6,
      service_name : 'Field Investigation'
    },
    {
      id : 41,
      mapping_id : 6,
      service_name : 'Laboratory testing'
    },
    {
      id : 42,
      mapping_id : 6,
      service_name : 'Results(SBC)'
    },
    {
      id : 43,
      mapping_id : 6,
      service_name : 'Sub soil profile & foundation'
    },
    {
      id : 44,
      mapping_id : 6,
      service_name : 'Graphs'
    },
    {
      id : 45,
      mapping_id : 6,
      service_name : 'Field Photos'
    },
    {
      id : 46,
      mapping_id : 6,
      service_name : 'Recommendations'
    }
  ];

  documentations = [
    {
      id : 1,
      title : 'Introduction'
    },
    {
      id : 2,
      title : 'Scope of work'
    },
    {
      id : 3,
      title : 'Methodology'
    },
    {
      id : 4,
      title : 'Local geology'
    },
    {
      id : 5,
      title : 'Field Investigation'
    },
    {
      id : 6,
      title : 'Laboratory testing'
    },
    {
      id : 7,
      title : 'Results(SBC)'
    },
    {
      id : 8,
      title : 'Sub soil profile & foundation'
    },
    {
      id : 9,
      title : 'Graphs'
    },
    {
      id : 10,
      title : 'Field Photos'
    },
    {
      id :11,
      title : 'Recommendations'
    },
  ];

  constructor(private activatedRoute : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
      offset: 50,
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
    this.activatedRoute.params.subscribe((params) => {
      this.subject = params['id'];
      for(let service of this.services)
      {
        if(this.subject === service.subject)
        {
          this.subject_details = service.details;
          this.subject_id = service.id;
          for(let sub_service of this.sub_services)
          {
            if(this.subject_id == sub_service.mapping_id)
            {
              this.sub_subjects[this.i] = sub_service.service_name;
              this.i++;
            }
          }
        }
      }
    })
    console.log("from new component " + this.subject);
    console.log("from new component " + this.subject_details);
    console.log("from new component array " + this.sub_subjects);
    console.log("Window width : "+window.innerWidth);
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
