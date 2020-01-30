import { Component, OnInit } from "@angular/core";
import { USER } from "../../services/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"],
  providers: [UserService]
})
export class RegisterFormComponent implements OnInit {
  constructor(private _userService: UserService) {}
  public userModel = new USER("", "", "", "");

  ngOnInit() {}
  onSubmit() {
    console.log(this.userModel);
    this._userService.signup(this.userModel).subscribe(
      response => console.log("Success!", response),
      error => console.log("error", error)
    );
  }
}
