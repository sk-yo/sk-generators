import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialDashBoardComponent } from './initial-dash-board.component';

describe('InitialDashBoardComponent', () => {
  let component: InitialDashBoardComponent;
  let fixture: ComponentFixture<InitialDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
