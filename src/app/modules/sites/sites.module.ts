import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SiteDetailsComponent } from "./components/site-details/site-details.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DomainCardComponent } from "./components/domain-card/domain-card.component";
import { SharedModule } from "../shared/shared.module";
import { AddNewSiteComponent } from "./add-new-site/add-new-site.component";

@NgModule({
  declarations: [
    SiteDetailsComponent,
    DomainCardComponent,
    AddNewSiteComponent,
  ],
  imports: [CommonModule, FormsModule, SharedModule, ReactiveFormsModule],
})
export class SitesModule {}
