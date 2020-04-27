import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmDataService } from '../film-data.service';
import { Film } from '../film.model';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  public film:Film;

  @Input() selected:boolean;
  constructor(private route: ActivatedRoute, private _filmDataService: FilmDataService) { }
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.route.data.subscribe(item => 
      this.film = item['film']);
  }

  toggleSelected() {
    this.selected = !this.selected;
    if(this.selected){
      this.addToFavourites();
    }else{
      this.removeFromFavourites();
    }
    this.selectedChange.emit(this.selected);
  }

  addToFavourites(){
    this._filmDataService.addToFavourites(this.film);
  }
  removeFromFavourites(){
    this._filmDataService.removeFromFavourites(this.film);
  }
  get genres():string[]{
    return this.film.genres;
  }
  get acteurs():string[]{
    return this.film.acteurs;
  }

}
