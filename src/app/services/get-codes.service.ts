import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetCodesService {

  icdCodesURL = "http://ec2-18-223-151-191.us-east-2.compute.amazonaws.com:8080/billing/icd10codes";
  cptCodesURL = "http://ec2-18-223-151-191.us-east-2.compute.amazonaws.com:8080/billing/cptCodes";
  constructor(private http: HttpClient) { 

  }

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

  getCPTCodes(): Observable<[]> {
    return this.http.get<[]>(this.cptCodesURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getChildrenCodes(code : string): Observable<[]> {
    return this.http.get<[]>(this.cptCodesURL + '/' + code)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
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
