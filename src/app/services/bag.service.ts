import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BagService {

  constructor(private http:HttpClient) { }

  listBags():Observable<any>{
    return this.http.get<any>("http://localhost:5000/MITCHA/bags/list")
 
  }

}
