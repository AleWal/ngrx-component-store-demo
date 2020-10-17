import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalAdministrationPageComponent } from './pages';

const routes: Routes = [
    {
        path: '',
        component: HospitalAdministrationPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalRoutingModule { }
