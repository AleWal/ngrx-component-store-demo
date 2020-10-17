import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalListFeatureComponent } from './hospital-list-feature.component';

describe('HospitalListFeatureComponent', () => {
  let component: HospitalListFeatureComponent;
  let fixture: ComponentFixture<HospitalListFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalListFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalListFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
