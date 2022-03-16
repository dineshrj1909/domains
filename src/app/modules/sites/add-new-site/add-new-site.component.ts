import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DomainService } from "../../core/services/domain.service";

@Component({
  selector: "app-add-new-site",
  templateUrl: "./add-new-site.component.html",
  styleUrls: ["./add-new-site.component.css"],
})
export class AddNewSiteComponent implements OnInit {
  @Input() visible: boolean = false;
  @Output() dismiss = new EventEmitter<boolean>();

  domainForm = this.fb.group({
    domain: ["", Validators.required],
    storage: ["", Validators.required],
    subdomain: this.fb.array([]),
    monthlyVisitorCapacity: ["", Validators.required],
  });

  constructor(private fb: FormBuilder, private domainService: DomainService) {}

  ngOnInit(): void {
    this.addSubdomain();
  }

  hideDialog(value: boolean) {
    this.visible = false;
    this.dismiss.emit(value);
  }

  get subdomain(): FormArray {
    return this.domainForm.get("subdomain") as FormArray;
  }

  newSubdomain(): FormGroup {
    return this.fb.group({
      name: "",
    });
  }

  addSubdomain() {
    this.subdomain.push(this.newSubdomain());
  }

  removeSubdomain(i: number) {
    this.subdomain.removeAt(i);
  }

  onSubmit() {
    if (this.domainForm.valid) {
      this.domainService
        .addDomain(this.domainForm.value)
        .subscribe((domain) => {
          this.hideDialog(false);
          window.alert("Succesfully added domain: " + domain.domain);
        });
    } else {
      window.alert("Please enter required fields");
    }
  }
}
