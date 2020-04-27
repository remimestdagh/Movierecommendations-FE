import { Pipe, PipeTransform } from '@angular/core';
import { Film } from './film.model';

@Pipe({
  name: 'filmFavoFilter'
})
export class FilmFavoFilterPipe implements PipeTransform {




  transform(films : Film[], filterViewed:boolean):Film[]{
    
    if(filterViewed==false){
      return films;
    }
    return films.filter(f=>!f.isFavourite);

  }

}
