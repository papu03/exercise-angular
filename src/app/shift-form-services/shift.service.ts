import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShiftDTO, Shift } from '../app.shift';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable(
  {providedIn: 'root'}
)
export class ShiftService {

  constructor(private http: HttpClient) {

   }

  private shiftsDTOUrl = 'http://localhost:8080/shiftsDTO'; 
  private shiftUrl = 'http://localhost:8080/shift'; 
  private shiftsUrl = 'http://localhost:8080/shifts'; 
  private invalidShiftsUrl = 'http://localhost:8080/invalidShifts'; 

  private crewMemberShiftUrl = 'http://localhost:8080/crewMemberShifts'; 

  
  getShiftsDTO(): Observable<ShiftDTO[]> {
    return this.http.get<ShiftDTO[]>(this.shiftsDTOUrl)
    .pipe(
      tap(_ => this.log('fetched shifts')),
      catchError(this.handleError('getShifts', []))
    );
  }

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

  getShiftDTO(id: number): Observable<ShiftDTO> {
    const url = `${this.shiftsDTOUrl}/${id}`;
    return this.http.get<ShiftDTO>(url).pipe(
      tap(_ => this.log(`fetched shift id=${id}`)),
      catchError(this.handleError<ShiftDTO>(`getShift id=${id}`))
    );
  }

  getInvalidShifts(): Observable<any> {

    return this.http.get<any>(this.invalidShiftsUrl).pipe(
      tap(_ => this.log(`getInvalidShifts`)),
      catchError(this.handleError<any>(`getInvalidShifts`))
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

  getShiftsFromMember(crewMemberId:number):Observable<ShiftDTO[]>{

    const url = `${this.crewMemberShiftUrl}/${crewMemberId}`;

    return this.http.get<ShiftDTO[]>(url).pipe(
      tap(_ => this.log(`fetched shift of crewMember id=${crewMemberId}`)),
      catchError(this.handleError<ShiftDTO[]>(`getShiftsFromMember id=${crewMemberId}`))
    );

  }
 
  deleteAllShiftOfMember(crewMemberId:number):Observable<ShiftDTO>{

    const url = `${this.crewMemberShiftUrl}/${crewMemberId}`;

    return this.http.delete<ShiftDTO>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted shift id=${crewMemberId}`)),
      catchError(this.handleError<ShiftDTO>('deleteShift')),
      
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
