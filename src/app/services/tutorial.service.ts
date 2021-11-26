import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';

const baseUrl = "http://localhost:8080/kie-server/services/rest/server/containers/star-health_1.0.0-SNAPSHOT/processes?page=0&pageSize=10&sortOrder=true";

//@Injectable()
@Injectable({
  providedIn: 'root'
})

export class TutorialService {

  
  constructor(private http: HttpClient) { }

  getAll() {
    //return this.http.get(baseUrl);
    console.log("inside service ");
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('pamAdmin:redhatpam1!')
      })
    };
    
    return this.http.get(`${baseUrl}`, { headers: headers });
    //return this.http.get(url, { headers: new HttpHeaders({'Authorization': 'Bearer ' + token})
 
  }

  // data= {
  //   "data" : 
  //   {
  //     "diagnosis-name": "Maternity",
  //      "gender":"Female",
  //       "age": 20
  //     }}
      
  // create(data: any) {
  //   return this.http.post(baseUrl, data);
  // }

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
