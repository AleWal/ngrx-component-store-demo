import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalAdministrationPageComponent } from './pages';
import { HospitalRoutingModule } from './hospital-routing.module';
import { HospitalService } from './domain';
import { HospitalListFeatureComponent } from './features/hospital-list-feature/hospital-list-feature.component';
import { HospitalDeatailFeatureComponent } from './features/hospital-deatail-feature/hospital-deatail-feature.component';



@NgModule({
  declarations: [
    HospitalAdministrationPageComponent,
    HospitalListFeatureComponent,
    HospitalDeatailFeatureComponent
  ],
  imports: [
    CommonModule,
    HospitalRoutingModule
  ],
  providers: [
    HospitalService
  ]
})
export class HostpitalModule { }
