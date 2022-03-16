import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SiteDetailsComponent } from "./components/site-details/site-details.component";
import { FormsModule } from "@angular/forms";
import { DomainCardComponent } from './components/domain-card/domain-card.component';

@NgModule({
  declarations: [SiteDetailsComponent, DomainCardComponent],
  imports: [CommonModule, FormsModule],
})
export class SitesModule {}
