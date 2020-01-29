import { Component, OnInit } from '@angular/core';
import { NewUser } from 'src/app/new-user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor() { }
  public userModel=new NewUser("","","","","",false);
  ngOnInit() {
  }
onSubmit(){
  console.log("signUp")
}
}
