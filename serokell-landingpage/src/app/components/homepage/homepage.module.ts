import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomepageComponent, ServicesComponent, ContactComponent, HomeComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
