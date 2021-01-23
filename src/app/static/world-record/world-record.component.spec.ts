import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldRecordComponent } from './world-record.component';

describe('WorldRecordComponent', () => {
  let component: WorldRecordComponent;
  let fixture: ComponentFixture<WorldRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
