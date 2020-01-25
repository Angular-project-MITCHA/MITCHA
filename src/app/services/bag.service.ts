import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bag } from '../bag';

@Injectable({
  providedIn: 'root'
})
export class BagService {

  constructor(private http:HttpClient) { }

<<<<<<< HEAD

  //get all bags
  listBags():Observable<any>{
    return this.http.get<any>("http://localhost:5000/MITCHA/bags/list")
=======
  listBags(bagsPerPage:Number,currentPage:Number):Observable<any>{
   const queryParams=`?pagesize=${bagsPerPage}&page=${currentPage}`;
   console.log(queryParams)
    return this.http
    .get<any>('http://localhost:5000/MITCHA/bags/list/' + queryParams)
>>>>>>> 115764d9baf59ca44b6043f4c6ce01bfda7bfb9a
 
  }


   // get bag details

   getDetails(_id):Observable<any>{
    return this.http.get<any>('http://localhost:5000/MITCHA/bags/bagdetail/'+_id);
  }

}
