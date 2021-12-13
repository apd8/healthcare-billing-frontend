import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {
  url = "http://ec2-18-223-151-191.us-east-2.compute.amazonaws.com:8080";
  claimsURL = this.url + "/billing/claims/";
  constructor(private http: HttpClient) { }

  processClaim(id: string) {
    return this.http.post(this.claimsURL + id + "/actions/process", {});
  }

  generateStatement(id: string) {
    return this.http.post(this.claimsURL + id + "/actions/generateStatement", {});
  }

  settleClaim(id: string) {
    return this.http.post(this.claimsURL + id + "/actions/settle", {});
  }
}
