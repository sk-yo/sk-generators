import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavViewLayoutComponent } from './nav-view-layout.component';

describe('NavViewLayoutComponent', () => {
  let component: NavViewLayoutComponent;
  let fixture: ComponentFixture<NavViewLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavViewLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavViewLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
