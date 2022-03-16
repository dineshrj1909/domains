import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-site-details",
  templateUrl: "./site-details.component.html",
  styleUrls: ["./site-details.component.css"],
})
export class SiteDetailsComponent implements OnInit {
  searchText: string = "";

  domainList = [
    {
      id: 1,
      domain: "abc.com",
      storage: "200gb",
      usedStorage: "50gb",
      domainTag: "Primary",
      availableDomains: 10,
      usedDomains: 4,
      status: "Active",
      monthlyVisitorCapacity: 10000,
      montlyVisitor: 100,
      subdomain: [
        {
          id: 11,
          name: "abc.xyz.com",
          usedStorage: "10gb",
          domainTag: "Staging",
          status: "Active",
          montlyVisitor: 700,
        },
        {
          id: 12,
          name: "adef.xyz.com",
          usedStorage: "40gb",
          domainTag: "Add On",
          status: "Active",
          montlyVisitor: 1100,
        },
      ],
    },

    {
      id: 2,
      domain: "xyz.com",
      storage: "100gb",
      usedStorage: "50gb",
      domainTag: "Primary",
      subdomain: [],
      status: "Inactive",
      availableDomains: 10,
      usedDomains: 1,
      monthlyVisitorCapacity: 10000,
      montlyVisitor: 2000,
    },
    {
      id: 3,
      domain: "xyz.com",
      storage: "100gb",
      usedStorage: "50gb",
      domainTag: "Primary",
      subdomain: [],
      status: "Inactive",
      availableDomains: 10,
      usedDomains: 1,
      monthlyVisitorCapacity: 10000,
      montlyVisitor: 2000,
    },
    {
      id: 4,
      domain: "xyz.com",
      storage: "100gb",
      usedStorage: "50gb",
      domainTag: "Primary",
      subdomain: [],
      status: "Inactive",
      availableDomains: 10,
      usedDomains: 1,
      monthlyVisitorCapacity: 10000,
      montlyVisitor: 2000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
