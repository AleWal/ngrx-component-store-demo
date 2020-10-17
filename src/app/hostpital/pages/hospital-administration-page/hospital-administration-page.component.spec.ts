import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalAdministrationPageComponent } from './hospital-administration-page.component';

describe('HospitalAdministrationPageComponent', () => {
  let component: HospitalAdministrationPageComponent;
  let fixture: ComponentFixture<HospitalAdministrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalAdministrationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalAdministrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
