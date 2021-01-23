import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqPgComponent } from './faq-pg.component';

describe('FaqPgComponent', () => {
  let component: FaqPgComponent;
  let fixture: ComponentFixture<FaqPgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqPgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
