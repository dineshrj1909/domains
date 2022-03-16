export interface Domain {
  id: number;
  domain: string;
  storage: string;
  usedStorage: string;
  domainTag: string;
  status: string;
  availableDomains: number;
  usedDomains: number;
  monthlyVisitorCapacity: number;
  montlyVisitor: number;
  subdomain: Array<Subdomain>;
}

export interface Subdomain {
  id: number;
  name: string;
  usedStorage: string;
  domainTag: string;
  status: string;
  montlyVisitor: number;
}
