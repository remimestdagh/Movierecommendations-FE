import { Component, OnInit } from '@angular/core';
import { FilmDataService } from '../film-data.service';
import { Film } from '../film.model';
import { catchError, distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { Observable, EMPTY, Subject } from 'rxjs';

@Component({
  selector: 'app-reco-film',
  templateUrl: './reco-film.component.html',
  styleUrls: ['./reco-film.component.css']
})
export class RecoFilmComponent implements OnInit {  

private _fetchRecommendations$: Observable<Film[]> =
 this._filmDataService.recommendations$;
 public filterFilm$ = new Subject<string>();
 public filterFilmName:string;


 public errorMessage:string="";  
constructor(private _filmDataService : FilmDataService) { 
  this.filterFilm$.pipe(distinctUntilChanged(),debounceTime(400),map(val=>val.toLowerCase())).subscribe(val=>this.filterFilmName=val);

}

get films$():Observable<Film[]>{
  return this._fetchRecommendations$;
}


applyFilter(filter:string){
  this.filterFilmName=filter;
}
  ngOnInit(): void {
    this._fetchRecommendations$ = this._filmDataService.recommendations$.pipe(
      catchError(err=>{
        this.errorMessage  = err;
        return EMPTY;
      }));
  }

}
