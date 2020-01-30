import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  getCart():Observable<any>{
    return this.http.get<any>('http://localhost:5000/MITCHA/shopcart/show');
  }

  postCart(proId):Observable<any> {
    return this.http.get<any>('http://localhost:5000/MITCHA/shopcart/cart/'+proId);
  }

  postDeleteCart(proId):Observable<any> {
    return this.http.get<any>('http://localhost:5000/MITCHA/shopcart/deleteCart/'+proId);
  }


}
