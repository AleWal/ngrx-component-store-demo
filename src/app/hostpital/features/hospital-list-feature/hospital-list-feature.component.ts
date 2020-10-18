import { Component, OnInit } from '@angular/core';
import { HospitalsStore } from './data-access/hospitals.store';

@Component({
  selector: 'app-hospital-list-feature',
  templateUrl: './hospital-list-feature.component.html',
  styleUrls: ['./hospital-list-feature.component.scss'],
  providers: [HospitalsStore]
})
export class HospitalListFeatureComponent implements OnInit {
  hospitals$ = this.hospitalsStore.hospitals$;
  isPending$ = this.hospitalsStore.isPending$;

  constructor(
    private readonly hospitalsStore: HospitalsStore
  ) { }

  ngOnInit(): void {
    this.hospitalsStore.getHospitals({});
  }
}
