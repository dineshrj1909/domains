import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent implements OnInit {
  navigations = [
    {
      title: "Dashboard",
      link: "dashboard",
    },
    {
      title: "Site Details",
      link: "site-details",
    },
    {
      title: "Migrations",
      link: "migrations",
    },
    {
      title: "Backups",
      link: "backups",
    },
    {
      title: "Collaborators",
      link: "collaborators",
    },
    {
      title: "Support Tickets",
      link: "support-tickets",
    },
    {
      title: "Open New Ticket",
      link: "open-new-ticket",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
