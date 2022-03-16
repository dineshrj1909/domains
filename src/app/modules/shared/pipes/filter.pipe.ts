import { Pipe, PipeTransform } from "@angular/core";
import { Domain } from "../../sites/components/domain-card/domain";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(domains: Array<Domain>, term: string): Array<Domain> {
    return domains.filter((domain: { domain: string }) =>
      domain.domain.toLowerCase().includes(term.toLowerCase())
    );
  }
}
