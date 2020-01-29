import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/login-user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }
  public userModel=new LoginUser("","");
  ngOnInit() {
  }
onSubmit(){
  console.log("login")
}
}
