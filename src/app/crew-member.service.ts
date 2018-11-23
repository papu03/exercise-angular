import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CrewMember } from './app.shift';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrewMemberService {

  constructor(private http: HttpClient) { }

  private membersUrl = 'http://localhost:8080/members'; 

  getMembers(): Observable<CrewMember[]> {
    return this.http.get<CrewMember[]>(this.membersUrl)
    .pipe(
      tap(_ => this.log('fetched members')),
      catchError(this.handleError('getMembers', []))
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