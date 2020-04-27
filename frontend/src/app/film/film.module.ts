import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmFilterPipe } from './film-filter.pipe';
import { GenreComponent } from './genre/genre.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { FilmResolver } from './FilmResolver';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoFilmListComponent } from './favo-film-list/favo-film-list.component';
import { RecoFilmComponent } from './reco-film/reco-film.component';
import { FilmFavoFilterPipe } from './film-favo-filter.pipe';
import { LazyLoadImageModule, scrollPreset} from 'ng-lazyload-image';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'

const routes: Routes = [
  { path: 'list', component: FilmListComponent },
  {path: 'favo',component: FavoFilmListComponent },
  {path: 'reco',component: RecoFilmComponent},
  { 
    path: 'detail/:id', 
    component: FilmDetailComponent, 
    resolve: { film: FilmResolver },
  },
  
];


@NgModule({
  declarations: [
    
    FilmComponent,
    FilmListComponent,
    FilmFilterPipe,
    GenreComponent,
    FilmDetailComponent,
    FavoFilmListComponent,
    RecoFilmComponent,
    FilmFavoFilterPipe,
  ],
  imports: [
    CommonModule, 
    LazyLoadImageModule.forRoot({
      preset: scrollPreset
    }),
    InfiniteScrollModule,
    MaterialModule, 
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports:[FilmListComponent]
})
export class FilmModule { }
