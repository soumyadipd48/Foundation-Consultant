import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { CarouselModule } from './carousel/carousel.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { IndustryDetailsComponent } from './components/industry-details/industry-details.component';
import { PrevDirective } from './directives/prev.directive';
import { NextDirective } from './directives/next.directive';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { IndustryDetailsNewComponent } from './components/industry-details-new/industry-details-new.component';
import { ServiceDetailsNewComponent } from './components/service-details-new/service-details-new.component';
import { CarouselNewComponent } from './carousel-new/carousel-new.component';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceDetailsComponent,
    IndustryDetailsComponent,
    PrevDirective,
    NextDirective,
    AboutUsComponent,
    ContactUsComponent,
    IndustryDetailsNewComponent,
    ServiceDetailsNewComponent,
    CarouselNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MdbCheckboxModule,
    CarouselModule,
    NgImageSliderModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
