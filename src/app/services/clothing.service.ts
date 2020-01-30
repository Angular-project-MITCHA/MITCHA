import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class  ClothingService {
  
  
      constructor(private http:HttpClient) { }


      listclothing(clothingPerPage:Number,currentPage:Number):Observable<any>{
        const queryParams=`?pagesize=${clothingPerPage}&page=${currentPage}`;
        console.log(queryParams)
         return this.http
         .get<any>('http://localhost:5000/MITCHA/clothing/list/')
      
       }
     
     
    getDetails(_id):Observable<any>{
      return this.http.get<any>('http://localhost:5000/MITCHA/clothing/clothingdetails/'+_id);
    }
    
    getSearch(name):Observable<any>{
      return this.http.get<any>('http://localhost:5000/MITCHA/clothing/search/'+name);
    }
  }
   
  
