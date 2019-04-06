import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable()
export class AppService {

  constructor(private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  test() {
    this.http.get('https://api.github.com/repos/google/incremental-dom').subscribe(val => console.log(val));
  }


  get(url: string, params: HttpParams = new HttpParams()) {
    return this.http.get(url, {params}).pipe(
      catchError(this.handleError)
    );
  }


  put(url: string, body: any): Observable<any> {
    return this.http.put(url, body).pipe(
      catchError(this.handleError)
    );
  }

  post(url: string, body: any): Observable<any> {
    return this.http.post(url, body).pipe(
      catchError(this.handleError)
    );
  }

  delete(url: string, body?: any): Observable<any> {
    return this.http.request('delete', url, {
      body
    }).pipe(
      catchError(this.handleError)
    );
  }
}
