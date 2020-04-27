import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from './film.model';
import {FilmDataService} from './film-data.service'
import {Router} from '@angular/Router'
import { Url } from 'url';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input() public film: Film;
  @Input() selected:boolean;
  constructor(private _filmDataService : FilmDataService) { }
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.selected = this.film.isFavourite;
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
  get id():number{
    return this.film.id;
  }
  get titleImage():string{
    return this.film.titleImage;
  }
  get loading():string{
    return "https://loading.io/asset/362467"
  }
  

}
