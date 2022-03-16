import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { DomainService } from "src/app/modules/core/services/domain.service";

@Component({
  selector: "app-site-details",
  templateUrl: "./site-details.component.html",
  styleUrls: ["./site-details.component.css"],
})
export class SiteDetailsComponent implements OnInit {
  searchText: string = "";
  limitEntries: number = 15;
  domainList = [];
  loading = true;
  showDialog = false;

  constructor(private domainService: DomainService) {}

  ngOnInit(): void {
    this.fetchDomains();
  }

  fetchDomains() {
    this.domainService.getDomains().subscribe((res) => {
      this.domainList = res;
      this.loading = false;
    });
  }

  hideDialog(value: boolean) {
    this.showDialog = value;
  }
}
