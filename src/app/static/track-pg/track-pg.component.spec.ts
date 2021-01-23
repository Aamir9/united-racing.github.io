import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPgComponent } from './track-pg.component';

describe('TrackPgComponent', () => {
  let component: TrackPgComponent;
  let fixture: ComponentFixture<TrackPgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackPgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
