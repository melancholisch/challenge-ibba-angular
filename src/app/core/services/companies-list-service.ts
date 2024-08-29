import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesListService {
  private apiUrl = 'https://antlia-mockapi.azurewebsites.net/api/v1/itau_teste';

  constructor(private http: HttpClient) { }

  getCompaniesList(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}