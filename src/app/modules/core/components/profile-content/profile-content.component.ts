import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile-content",
  templateUrl: "./profile-content.component.html",
  styleUrls: ["./profile-content.component.css"],
})
export class ProfileContentComponent implements OnInit {
  userProfile = {
    name: "John Doe",
    email: "john.doe@email.com",
  };
  constructor() {}

  ngOnInit(): void {}
}
