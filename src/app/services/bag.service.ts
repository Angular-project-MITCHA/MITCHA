import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BagService {

  constructor(private http:HttpClient) { }

  listBags(bagsPerPage:Number,currentPage:Number):Observable<any>{
   const queryParams=`?pagesize=${bagsPerPage}&page=${currentPage}`;
   console.log(queryParams)
    return this.http
    .get<any>('http://localhost:5000/MITCHA/bags/list/' + queryParams)
 
  }

}
