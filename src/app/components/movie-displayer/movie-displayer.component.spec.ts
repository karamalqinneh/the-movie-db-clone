import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDisplayerComponent } from './movie-displayer.component';

describe('MovieDisplayerComponent', () => {
  let component: MovieDisplayerComponent;
  let fixture: ComponentFixture<MovieDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDisplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
