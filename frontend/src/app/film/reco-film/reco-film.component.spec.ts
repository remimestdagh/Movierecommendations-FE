import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoFilmComponent } from './reco-film.component';

describe('RecoFilmComponent', () => {
  let component: RecoFilmComponent;
  let fixture: ComponentFixture<RecoFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
