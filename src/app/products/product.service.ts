import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IProduct } from './product';

// Making services injectable at the root allows any component access to them
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    // Use a local JSON file for the tutorial, instead of an actual web page
    private productUrl = 'api/products/products.json';

    // Inject the Angular HttpClient for use in our custom service
    constructor(private http: HttpClient) {}
    
    getProducts(): Observable<IProduct[]> {
        /* Using the IProduct[] identifier for the http get() method 
        * causes the returned data to be automatically mapped to an IProduct array from the JSON file.

        * tap() allows for a read-only view into the Observable data without * * modifying it.
        * catchError() catches any errors returned from the http request. 
        */
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            //tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        /* In a real-world app, we may send the server to some remote logging infrastructure instead of just logging it to the console.
        */
       let errorMessage = '';
       if (err.error instanceof ErrorEvent) {
           // A client-side or network error occurred. Handle it accordingly.
           errorMessage = `An error occurred: ${err.error.message}`;
       }
       else {
           /* The backend returned an unsuccessful reponse code. The response 
           * body may contain clues as to what went wrong. 
           */
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
       }
       console.log(errorMessage);
       return throwError(errorMessage);
    }
}