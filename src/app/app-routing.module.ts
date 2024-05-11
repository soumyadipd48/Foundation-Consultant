import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { IndustryDetailsComponent } from './components/industry-details/industry-details.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { IndustryDetailsNewComponent } from './components/industry-details-new/industry-details-new.component';
import { ServiceDetailsNewComponent } from './components/service-details-new/service-details-new.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'service-details/:id', component: ServiceDetailsComponent },
  { path: 'service-details-new/:id', component: ServiceDetailsNewComponent },
  { path: 'industry-details/:id', component: IndustryDetailsComponent },
  { path: 'industry-details-new/:id', component: IndustryDetailsNewComponent },
  { path: 'aboutUs', component: AboutUsComponent},
  { path: 'contactUs', component: ContactUsComponent}
];

const routerOptions : ExtraOptions = {
  scrollPositionRestoration:'enabled',
  anchorScrolling:'enabled'
}

@NgModule({
  // imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled'})],
  imports: [RouterModule.forRoot(routes,  routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
