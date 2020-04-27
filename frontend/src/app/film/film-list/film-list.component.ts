import { Component, OnInit } from '@angular/core';
import { Film } from '../film.model'
import { FilmDataService } from '../film-data.service'
import { Observable, EMPTY, Subject, pipe } from 'rxjs';
import { catchError, distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  public filterFilmName: string;
  public errorMessage: string = "";
  public filterFilm$ = new Subject<string>();
  public checked$ = new Subject<boolean>();
  public checked: boolean = false;

  //new
  public specFilms: Array<Film> = [];
  private skip: number = 0;
  private _fetchSpec: Observable<Film[]> = this._filmDataService.getSpecifiedFilms$(this.skip);

  constructor(private _filmDataService: FilmDataService) {
    this.filterFilm$.pipe(distinctUntilChanged(), debounceTime(400), map(val => val.toLowerCase())).subscribe(val => this.filterFilmName = val);
    this.checked$.pipe(distinctUntilChanged(), debounceTime(400)).subscribe(val => this.checked = val);
  }
  applyFilter(filter: string) {
    this.filterFilmName = filter;
  }
  applyViewFilter(event) {
    this.checked = event.checked;
  }
  ngOnInit(): void {
    this._filmDataService.getSpecifiedFilms$(this.skip).pipe(catchError((err)=>{
      this.errorMessage=err;
      return EMPTY;
    })).subscribe(fi => {
      this.skip = this.skip + 100;
      this.specFilms = this.specFilms.concat(fi);
    });
  }
  onScroll() {
    this._filmDataService.getSpecifiedFilms$(this.skip).pipe().subscribe(fi => {
      console.log("scrolled");
      this.skip = this.skip + 100;
      this.specFilms = this.specFilms.concat(fi);
    });
  }

  searchFilm() {
    
    this.filterFilm$.subscribe(p=>this.filterFilmName=p);
    this._filmDataService.searchFilms(this.filterFilmName).pipe().subscribe(fi => {
      this.skip = 0;
      this.specFilms = fi;
    });
  }
}


