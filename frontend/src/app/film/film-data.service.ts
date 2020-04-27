import { Injectable, OnInit } from '@angular/core';
import { Film } from './film.model';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, catchError, tap, shareReplay, switchMap } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject, of,forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmDataService {
  constructor(private http:HttpClient ) { 
}
  
 
  searchFilms(searchString:string):Observable<Film[]>{
    return this.http.get(`${environment.apiUrl}/Films/`+searchString+"/results").pipe(
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Film[] => list.map(Film.fromJSON))
    );
  }
  

  
  getSpecifiedFilms$(skip:number): Observable<Film[]>{
    return this.http.get(`${environment.apiUrl}/Films/GetNextFilms`,{params: new HttpParams().set("skip",skip.toString())}).pipe(
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Film[] => list.map(Film.fromJSON))
    );
  }
  
  addNewFilm(film:Film){
   return this.http.post
  }

  getFilm$(id: string): Observable<Film> {
    return this.http
      .get(`${environment.apiUrl}/Films/${id}`)
      .pipe(catchError(this.handleError), map(Film.fromJSON)); 
  }

  get favoFilms$() : Observable<Film[]>{
    return this.http.get(`${environment.apiUrl}/Films/GetFavourites`).pipe(
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Film[] => list.map(Film.fromJSON))
    );
  }
  get recommendations$() : Observable<Film[]>{
    return this.http.get(`${environment.apiUrl}/Films/GetRecommendBasedOnFavourites`).pipe(
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Film[] => list.map(Film.fromJSON))
    );
  }


  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else if (err instanceof HttpErrorResponse) {
      console.log(err);
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = err;
    }
    return throwError(errorMessage);
  }

  addToFavourites(film : Film){
    return this.http.post(`${environment.apiUrl}/Films/`+film.id, film.toJSON).subscribe();
  }
  removeFromFavourites(film : Film) {
    return this.http.delete(`${environment.apiUrl}/Films/`+film.id , { responseType: 'text' }).subscribe();
  }

}
