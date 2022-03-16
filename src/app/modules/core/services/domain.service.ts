import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { catchError, Observable } from "rxjs";
import { Domain } from "../../sites/components/domain-card/domain";

@Injectable({
  providedIn: "root",
})
export class DomainService {
  constructor(private http: HttpClient) {}

  getDomains(): Observable<any> {
    return this.http.get("http://localhost:3000/domains");
  }

  addDomain(domain: Domain): Observable<Domain> {
    return this.http
      .post<Domain>("http://localhost:3000/domains", domain)
      .pipe(catchError(this.handleError("addDomain", domain)));
  }

  handleError(
    arg0: string,
    domain: Domain
  ): (
    err: any,
    caught: Observable<Domain>
  ) => import("rxjs").ObservableInput<any> {
    throw new Error("Failded to add domain.");
  }
}
