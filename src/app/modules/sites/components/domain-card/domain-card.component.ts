import { Component, Input, OnInit } from "@angular/core";
import { Domain } from "./domain";

@Component({
  selector: "app-domain-card",
  templateUrl: "./domain-card.component.html",
  styleUrls: ["./domain-card.component.css"],
})
export class DomainCardComponent implements OnInit {
  @Input() domain!: Domain;

  constructor() {}

  ngOnInit(): void {}

  getStorageValue(storage: string) {
    return parseInt(storage);
  }
}
