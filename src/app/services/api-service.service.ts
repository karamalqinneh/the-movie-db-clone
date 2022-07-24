import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private apiKey: string = 'f82ecbb7a5110caecaee2bee5e4c79d6';
  allMovies: any = [];
  constructor(private http: HttpClient) {}

  get(url: string) {
    let modUrl = url.replace('<<api_key>>', this.apiKey);
    let response = this.http.get(modUrl);
    response.subscribe((ele) => (this.allMovies = ele));
    return response;
  }
}
