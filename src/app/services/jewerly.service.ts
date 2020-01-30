import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Jewerly} from '../jewerly';

@Injectable({
  providedIn: 'root'
})
export class JewerlyService {

  constructor(private http:HttpClient) { }
  listJew(bagsPerPage:Number,currentPage:Number):Observable<any>{
    const queryParams=`?pagesize=${bagsPerPage}&page=${currentPage}`;
    console.log(queryParams)
    return this.http.get<any>("http://localhost:5000/MITCHA/jewerly/list/" + queryParams);
 
  }
  jewDetails(_id):Observable<any>{
    return this.http.get<any>('http://localhost:5000/MITCHA/jewerly/jewelrydetails/'+_id);
  }
  getSearch(name):Observable<any>{
    return this.http.get<any>('http://localhost:5000/MITCHA/jewerly/search/'+name);
  }
}

