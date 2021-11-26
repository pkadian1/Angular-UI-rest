import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';

const baseUrl = 'http://localhost:8080/kie-server/services/rest/server/containers/star-health_1.0.0-SNAPSHOT/processes/star-health.medical-claim/instances';

//@Injectable()
@Injectable({
  providedIn: 'root'
})

export class TutorialService {

  
  constructor(private http: HttpClient) { }

  getAll() {
    //return this.http.get(baseUrl);
    console.log("inside service ");
    return this.http.get(`${baseUrl}/users`);
  }

  data= {
    "data" : 
    {
      "diagnosis-name": "Maternity",
       "gender":"Female",
        "age": 20
      }}
      
  create(data: any) {
    return this.http.post(baseUrl, data);
  }

  /*get(users: any) {
    return this.http.get(`${baseUrl}/users`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  }*/
}
