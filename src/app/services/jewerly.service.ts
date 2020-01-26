import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JewerlyService {

  constructor(private http:HttpClient) { }
  listJew():Observable<any>{
    return this.http.get<any>("http://localhost:5000/MITCHA/jewerly/jewlist")
 
  }
}
