import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bag } from '../bag';

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


   // get bag details

   getDetails(_id):Observable<any>{
    return this.http.get<any>('http://localhost:5000/MITCHA/bags/bagdetail/'+_id);
  }


  randomBags():Observable<any>{
    
     return this.http.get<any>('http://localhost:5000/MITCHA/bags/random');
  
   }


  getSearch(name):Observable<any>{
    return this.http.get<any>('http://localhost:5000/MITCHA/bags/search/'+name);
  }
}
