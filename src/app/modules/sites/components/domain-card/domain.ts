export interface Domain {
  id: Number;
  domain: String;
  storage: String;
  usedStorage: String;
  domainTag: String;
  availableDomains: Number;
  usedDomains: Number;
  monthlyVisitorCapacity: Number;
  montlyVisitor: Number;
  subdomain: Array<Subdomain>;
}

export interface Subdomain {
  id: Number;
  name: String;
  usedStorage: String;
  domainTag: String;
  montlyVisitor: Number;
}
