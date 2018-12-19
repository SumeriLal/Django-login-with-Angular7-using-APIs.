import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  register;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.register = {
      username: "",
      password: "",
      email: ""
    };
  }
  registerUser() {
    this.userService.registerNewUser(this.register).subscribe(
      response => {
        alert(
          "User " + this.register.username + " has been created successfully!"
        );
      },

      error => console.log("error", error)
    );
  }
}
