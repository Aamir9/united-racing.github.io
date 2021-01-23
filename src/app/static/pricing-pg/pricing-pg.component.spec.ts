import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPgComponent } from './pricing-pg.component';

describe('PricingPgComponent', () => {
  let component: PricingPgComponent;
  let fixture: ComponentFixture<PricingPgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingPgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
