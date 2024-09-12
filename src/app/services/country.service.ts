import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private api = 'https://restcountries.com/v2/all'

  constructor(private http: HttpClient) {}

  allCountries():Observable<any>{
    return this.http.get<any>(this.api)
  }
}
