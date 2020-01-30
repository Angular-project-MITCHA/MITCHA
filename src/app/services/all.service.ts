import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private http:HttpClient) { }
  // getSearch(name):Observable<any>{
  //   return this.http.get<any>('http://localhost:5000/MITCHA/all/search/'+name);
  // }
}
