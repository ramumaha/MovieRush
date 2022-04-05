import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAssetsComponent } from './movie-assets.component';

describe('MovieAssetsComponent', () => {
  let component: MovieAssetsComponent;
  let fixture: ComponentFixture<MovieAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
