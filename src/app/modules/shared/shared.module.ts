import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { FilterPipe } from "./pipes/filter.pipe";

@NgModule({
  declarations: [ProgressBarComponent, FilterPipe],
  imports: [CommonModule],
  exports: [ProgressBarComponent, FilterPipe],
})
export class SharedModule {}
