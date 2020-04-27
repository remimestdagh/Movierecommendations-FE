import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoFilmListComponent } from './favo-film-list.component';

describe('FavoFilmListComponent', () => {
  let component: FavoFilmListComponent;
  let fixture: ComponentFixture<FavoFilmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoFilmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoFilmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
