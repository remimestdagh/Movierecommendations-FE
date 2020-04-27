import { Component, OnInit } from '@angular/core';
import {Film} from '../film.model'
import {FilmDataService} from '../film-data.service'
import { Observable, EMPTY, Subject } from 'rxjs';
import { catchError, distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-favo-film-list',
  templateUrl: './favo-film-list.component.html',
  styleUrls: ['./favo-film-list.component.css']
})
export class FavoFilmListComponent implements OnInit {
  private _fetchFilms$: Observable<Film[]> 
  = this._filmDataService.favoFilms$;
  public filterFilmName:string;
  public errorMessage:string="";
  public filterFilm$ = new Subject<string>();

  constructor(private _filmDataService:FilmDataService) { 
    this.filterFilm$.pipe(distinctUntilChanged(),debounceTime(400),map(val=>val.toLowerCase())).subscribe(val=>this.filterFilmName=val);
  }
  applyFilter(filter:string){
    this.filterFilmName=filter;
  }
  get films$():Observable<Film[]>{
    return this._fetchFilms$;
  }
  
  

  ngOnInit(): void {
    console.log("loading film list");
    this._fetchFilms$ = this._filmDataService.favoFilms$.pipe(
      catchError(err=>{
        this.errorMessage  = err;
        return EMPTY;
      })
    );
  }

}
