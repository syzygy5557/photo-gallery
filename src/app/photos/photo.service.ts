import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError,of } from 'rxjs';
import { tap, catchError, scan,filter,reduce, mergeMap, distinct, toArray, map} from 'rxjs/operators';
import { IPhoto } from './photo';



@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  photoUrl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) {}


    photos$ = this.http.get<IPhoto[]>(this.photoUrl).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
    getImage(id:number) {
      return this.http.get<IPhoto>(this.photoUrl + '/'+ id);
    }

    
    
  
    //albums$ = this.photos$.pipe(distinct(a => a.albumId)
    

    
    
  

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }
}
