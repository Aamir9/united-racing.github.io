import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellYourDataComponent } from './sell-your-data.component';

describe('SellYourDataComponent', () => {
  let component: SellYourDataComponent;
  let fixture: ComponentFixture<SellYourDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellYourDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellYourDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
