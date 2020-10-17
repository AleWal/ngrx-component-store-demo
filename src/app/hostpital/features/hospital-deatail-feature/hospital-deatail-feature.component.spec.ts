import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalDeatailFeatureComponent } from './hospital-deatail-feature.component';

describe('HospitalDeatailFeatureComponent', () => {
  let component: HospitalDeatailFeatureComponent;
  let fixture: ComponentFixture<HospitalDeatailFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalDeatailFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalDeatailFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
