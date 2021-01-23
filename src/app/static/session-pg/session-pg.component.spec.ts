import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionPgComponent } from './session-pg.component';

describe('SessionPgComponent', () => {
  let component: SessionPgComponent;
  let fixture: ComponentFixture<SessionPgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionPgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
