import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

@NgModule({
  declarations: [NavigationComponent, PageNotFoundComponent],
  imports: [CommonModule],
  exports: [NavigationComponent, PageNotFoundComponent],
})
export class CoreModule {}
