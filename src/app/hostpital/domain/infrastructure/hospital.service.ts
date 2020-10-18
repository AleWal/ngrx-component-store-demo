import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HostpitalDto } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class HospitalService {
  constructor(private httpClient: HttpClient) { }

  getHospitals(): Observable<HostpitalDto[]> {
    const url = 'assets/data/hospitals.json';
    return this.httpClient.get<HostpitalDto[]>(url);
  }
}
