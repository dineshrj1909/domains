import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./modules/core/components/page-not-found/page-not-found.component";
import { SiteDetailsComponent } from "./modules/sites/components/site-details/site-details.component";

const routes: Routes = [
  {
    path: "site-details",
    component: SiteDetailsComponent,
  },
  { path: "", redirectTo: "/site-details", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
