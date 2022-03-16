import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { DomainService } from "src/app/modules/core/services/domain.service";

@Component({
  selector: "app-site-details",
  templateUrl: "./site-details.component.html",
  styleUrls: ["./site-details.component.css"],
})
export class SiteDetailsComponent implements OnInit {
  searchText: string = "";
  domainList = [];
  loading = true;

  constructor(private domainService: DomainService) {}

  ngOnInit(): void {
    this.domainService.getDomains().subscribe((res) => {
      this.domainList = res;
      this.loading = false;
    });
  }
}
