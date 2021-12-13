import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export class Claim {
  "patientId": string;
  "additionalInfo": string;
  "icd10Codes": Array<[]>;
  "cpts": Array<[]>;
}

@Injectable({
  providedIn: 'root'
})
export class GetCodesService {

  url = "http://ec2-18-223-151-191.us-east-2.compute.amazonaws.com:8080";
  icdCodesURL = this.url + "/billing/icd10";
  cptCodesURL = this.url + "/billing/cptGroups";
  icdChildCodesURL = this.url + "/billing/icd10/";
  claimsURL = this.url + "/billing/claims";
  configurations = this.url + "/billing/configurations";
  
  claimObj:any = {
    "patientId": "CS63700PatientID001",
    "icd10Codes" : [],
    "cpts" : [],
    "additionalInfo": "",
  }
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getICDCodes(): Observable<[]> {
    return this.http.get<[]>(this.icdCodesURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getClaims(): Observable<[]> {
    return this.http.get<[]>(this.claimsURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getCPTCodes(): Observable<[]> {
    return this.http.get<[]>(this.cptCodesURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  saveClaim() {
    return this.http.post(this.claimsURL, this.claimObj);
  }

  deleteClaim(id: string){
    return this.http.delete<{}>(this.claimsURL + '/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getICDChildCodes(code : string): Observable<[]> {
    return this.http.get<[]>(this.icdChildCodesURL + code)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getConfigurations(): Observable<[]> {
    return this.http.get<[]>(this.configurations)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  setIcdCodes(codes: any[]) {
    this.claimObj['icd10Codes'] = codes;
  }

  setCptCodes(codes: any[]) {
    this.claimObj['cpts'] = codes;
    console.log(this.claimObj, 'jkdkk');
  }

  handleError(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
