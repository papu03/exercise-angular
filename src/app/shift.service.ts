import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Shift, CrewMember } from './app.shift';
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
  private crewMemberShiftUrl = 'http://localhost:8080/crewMemberShifts'; 

  
  getShifts(): Observable<Shift[]> {
    return this.http.get<Shift[]>(this.shiftsUrl)
    .pipe(
      tap(_ => this.log('fetched shifts')),
      catchError(this.handleError('getShifts', []))
    );
  }

  getShift(id: number): Observable<Shift> {
    const url = `${this.shiftsUrl}/${id}`;
    return this.http.get<Shift>(url).pipe(
      tap(_ => this.log(`fetched shift id=${id}`)),
      catchError(this.handleError<Shift>(`getShift id=${id}`))
    );
  }

  addShift(shift:Shift):Observable<Shift>{
    
    return this.http.post<Shift>(this.shiftUrl, shift, httpOptions).pipe(
      tap((shift: Shift) => this.log(`added shift`)),
      catchError(this.handleError<Shift>('addShift')),
      
    );
  }

  deleteShift(shift:Shift):Observable<Shift>{
    const id = typeof shift === 'number' ? shift : shift.shiftId;
    const url = `${this.shiftUrl}/${id}`;

    return this.http.delete<Shift>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted shift id=${id}`)),
      catchError(this.handleError<Shift>('deleteShift')),
      
    );
  }

  getShiftsFromMember(crewMemberId:number):Observable<Shift[]>{

    const url = `${this.crewMemberShiftUrl}/${crewMemberId}`;

    return this.http.get<Shift[]>(url).pipe(
      tap(_ => this.log(`fetched shift of crewMember id=${crewMemberId}`)),
      catchError(this.handleError<Shift[]>(`getShiftsFromMember id=${crewMemberId}`))
    );
  }
 
  deleteAllShiftOfMember(crewMemberId:number):Observable<Shift>{

    const url = `${this.crewMemberShiftUrl}/${crewMemberId}`;

    return this.http.delete<Shift>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted shift id=${crewMemberId}`)),
      catchError(this.handleError<Shift>('deleteShift')),
      
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
