import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Shift, CrewMember, ShiftDTO } from './app.shift';
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

  addShift(shift:ShiftDTO):Observable<ShiftDTO>{
    
    return this.http.post<ShiftDTO>(this.shiftUrl, shift, httpOptions).pipe(
      tap((shift: ShiftDTO) => this.log(`added shift`)),
      catchError(this.handleError<ShiftDTO>('addShift')),
      
    );
  }

  updateShift(shiftToUpdateId:number,newShift:ShiftDTO):Observable<ShiftDTO>{

    
    const url = `${this.shiftUrl}/${shiftToUpdateId}`;
    return this.http.put<ShiftDTO>(url, newShift, httpOptions).pipe(
      tap(_  => this.log(`updated shift id=${shiftToUpdateId}`)),
      catchError(this.handleError<ShiftDTO>('updateShift')),
      
    );
  }


  deleteShift(shift:ShiftDTO):Observable<ShiftDTO>{
    const id = typeof shift === 'number' ? shift : shift.shiftId;
    const url = `${this.shiftUrl}/${id}`;

    return this.http.delete<ShiftDTO>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted shift id=${id}`)),
      catchError(this.handleError<ShiftDTO>('deleteShift')),
      
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
