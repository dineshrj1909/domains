import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.css"],
})
export class ProgressBarComponent implements OnInit {
  @Input() max!: number;
  @Input() value!: number;
  @Input() description!: string;

  width!: number;
  constructor() {}

  ngOnInit(): void {
    this.width = (this.value / this.max) * 100;
  }
}
