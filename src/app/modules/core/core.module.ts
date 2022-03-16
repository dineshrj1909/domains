import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { RouterModule } from "@angular/router";
import { ProfileContentComponent } from "./components/profile-content/profile-content.component";

@NgModule({
  declarations: [
    NavigationComponent,
    PageNotFoundComponent,
    ProfileContentComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [NavigationComponent, PageNotFoundComponent],
})
export class CoreModule {}
