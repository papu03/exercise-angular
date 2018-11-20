import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Shift } from './app.shift';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable(
  {providedIn: 'root'}
)
export class ShiftService {

  constructor(private http: HttpClient) {
    console.log("ShiftService constructor")

   }

  private shiftsUrl = 'http://localhost:8080/shifts'; 
  private shiftUrl = 'http://localhost:8080/shift'; 

  
  getShifts(): Observable<Shift[]> {
    return this.http.get<Shift[]>(this.shiftsUrl)
    .pipe(
      tap(_ => this.log('fetched shifts')),
      catchError(this.handleError('getShifts', []))
    );
  }

  addShift(shift:Shift):Observable<Shift>{
    
    return this.http.post<Shift>(this.shiftUrl, shift, httpOptions).pipe(
      tap((shift: Shift) => this.log(`added shift`)),
      catchError(this.handleError<Shift>('addShift')),
      
    );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
   
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(message)
  }

  
}
