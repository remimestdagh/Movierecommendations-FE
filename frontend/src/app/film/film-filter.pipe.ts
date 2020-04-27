import { Pipe, PipeTransform } from '@angular/core';
import { Film } from './film.model';

@Pipe({
  name: 'filmFilter'
})
export class FilmFilterPipe implements PipeTransform {
  

  

  transform(films: Film[], name: string): Film[] {
    if (!name || name.length === 0) {
      return films;
    }
    return films.filter(rec =>
      rec.name.toLowerCase().match(name.toLowerCase())
    );
  }

}
