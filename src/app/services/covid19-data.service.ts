import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19DataService {

  constructor(private http:HttpClient) { }

  getCovidData():Observable<any>{
    return this.http.get<any[]>('https://data.covid19india.org/state_district_wise.json');
  }
}
