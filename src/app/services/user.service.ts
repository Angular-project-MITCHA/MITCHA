import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { USER } from "./user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private _http: HttpClient) {}
  _url = "http://localhost:5000/MITCHA/user/signup";
  signup(user: USER){
    return this._http.post<any>(this._url, user);
  }
}
