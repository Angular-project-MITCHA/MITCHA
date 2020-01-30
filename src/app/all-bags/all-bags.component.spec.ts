import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBagsComponent } from './all-bags.component';

describe('AllBagsComponent', () => {
  let component: AllBagsComponent;
  let fixture: ComponentFixture<AllBagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
