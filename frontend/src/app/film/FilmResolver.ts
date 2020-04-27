import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Film } from './film.model';
import { FilmDataService } from './film-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmResolver implements Resolve<Film> { 
  constructor(private filmService: FilmDataService) {}
 
  resolve(route: ActivatedRouteSnapshot, 
          state: RouterStateSnapshot): Observable<Film> {
            return this.filmService.getFilm$(route.params['id']);
          }
  }

