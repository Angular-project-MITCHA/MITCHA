import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bag } from '../bag';

@Injectable({
  providedIn: 'root'
})
export class BagService {

  constructor(private http:HttpClient) { }


  //get all bags
  listBags():Observable<any>{
    return this.http.get<any>("http://localhost:5000/MITCHA/bags/list")
 
  }


   // get bag details

   getDetails(_id):Observable<any>{
    return this.http.get<any>('http://localhost:5000/MITCHA/bags/bagdetail/'+_id);
  }

}
