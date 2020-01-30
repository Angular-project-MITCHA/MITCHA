import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJewleryComponent } from './all-jewlery.component';

describe('AllJewleryComponent', () => {
  let component: AllJewleryComponent;
  let fixture: ComponentFixture<AllJewleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllJewleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllJewleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
